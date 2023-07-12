import { useState } from "react";

// UTILS
import validateColor from './utils/validateColor';
import validateDate from './utils/validateDate';
import validateEmail from './utils/validateEmail';
import validateMonth from './utils/validateMonth';
import validateNumber from './utils/validateNumber';
import validatePhoneNumber from './utils/validatePhoneNumber';
import validateRange from './utils/validateRange';
import validateTime from './utils/validateTime';
import validateUrl from './utils/validateUrl';
import validateWeek from './utils/validateWeek';

// VIEWS
import FormInput from './views/FormInput';
import FormTextarea from './views/FormTextarea';
import FormSelectBox from './views/FormSelectBox';
import FormCheckBox from './views/FormCheckbox';
import FormRadio from './views/FormRadio';
import FormFile from './views/FormFile';
import FormHidden from './views/FormHidden';
import FormButton from './views/FormButton';
import FormImage from './views/FormImage';

import FormReview from './views/FormReview';

function DisplayForm({ form, useReview = false, btnPrevious = {}, btnNext = {}, btnSubmit = {}, callback }) {
	console.log('Forms/Controller.js DisplayForm() invoked');
	
	const [currentStep, setCurrentStep] = useState(0);
	const [formValues, setFormValues] = useState({});
	const [showReview, setShowReview] = useState(false);
	const [invalidFields, setInvalidFields] = useState([]);

	console.debug('Forms/Controller.js: form = '+JSON.stringify(form));
	console.log('Forms/Controller.js: currentStep = '+currentStep);

	const isStepValid = () => {
		console.log('Forms/Controller.js isStepValid() invoked');

		const invalidFields = form[currentStep].fields
		.filter(
			(field) =>
			field.required &&
			(formValues[field.name] === undefined || formValues[field.name] === "") && validateField(field)
		)
		.map((field) => field.name);

		setInvalidFields(invalidFields);
		return invalidFields.length === 0;
	};

	const validateField = (field) => {
		console.log('Forms/Controller.js validateField() invoked');
		switch (field.type){
			case "email":
				return validateEmail(formValues[field.name]);
			case "url":
				return validateUrl(formValues[field.name]);
			default:
				return true;
		}
	}

	const handleInputChange = (event) => {
		console.debug('Forms/Controller.js handleInputChange() invoked');

		const { name, value } = event.target;
		setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
	};

	const handlePrevStep = () => {
		console.log('Forms/Controller.js handlePrevStep() invoked');
		if(showReview){
		setShowReview(false);
		}
		else{
		setCurrentStep((prevStep) => prevStep - 1);
		}
	};

	const handleNextStep = () => {
		console.log('Forms/Controller.js handleNextStep() invoked');

		if(isStepValid()){
			console.log('Forms/Controller.js handleNextStep() isStepValid() true');
			if(currentStep === form.length - 1){
			if(useReview === true){
				console.log('Forms/Controller.js handleNextStep() setShowReview true');
				setShowReview(true);
			}
			else{
				console.log('Forms/Controller.js handleNextStep() handleSubmit()');
				handleSubmit();
			}
			}
			else{
			setCurrentStep((prevStep) => prevStep + 1);
			}
		}
		else{
			console.log('Forms/Controller.js handleNextStep() isStepValid() false');
		}
	};

	const handleSubmit = (event) => {
		console.log("Forms/Controller.js: handleSubmit() formValues = ", JSON.stringify(formValues));
		if(callback){
			console.log('Forms/Controller.js handleSubmit() callback');
			event.preventDefault();
			callback(formValues);
		}
	};

	const showPreviousBtn = () => {
		if(currentStep > 0){
		const { value = 'Previous', style = {}, ...props } = btnPrevious;

			return (
				<FormButton 
			button={
			{
				type: 'button',
				value: value, 
				style: { ...style, float: 'left'},
				...props
			}
			}
			callback={handlePrevStep} 
		/>
			);
		}
	};

	const showNextBtn = () => {
		if((currentStep < form.length - 1) || ((useReview === true) && !showReview)){
		const { value = 'Next', style = {}, ...props } = btnNext;

			return (
				<FormButton 
			button={
			{
				type: 'button',
				value: value,
				style: { ...style, float: 'right'},
				...props
			}
			}  
			callback={handleNextStep} 
		/>
			);
		}
	};

	const showSubmitBtn = () => {
		if(((currentStep >= form.length - 1) && useReview !== true) || (useReview === true && showReview)){
		const { value = 'Submit', style = {}, ...props } = btnSubmit;

		return (
			<FormButton
			button={
				{ 
				type: 'submit',
				value: value,
				style: { ...style, float: 'right' },
				...props
				}
			}
			callback={handleSubmit}
			/>
		);
		}
	};

  return (
    <form onSubmit={handleSubmit}>
      	{showReview ? (
         	<FormReview form={form} values={formValues} setShowReview={setShowReview} />
		) : 
		(
			<>
			{
				form.map((step,stepIndex) => (
					<fieldset key={stepIndex} style={stepIndex !== currentStep ? {display: 'none'} : null}>
					<h2>{form[stepIndex].title}</h2>

					{invalidFields ? (
						form[stepIndex].fields.map((field, index) => {
							return (invalidFields.includes(field.name) ? <div key={index}>Missing required field: {field.label?.text}</div> : null);
						})
					) : null}

					{form[stepIndex].fields.map((field, index) => {
						const isInvalid = invalidFields.includes(field.name);
			
						switch (field.type.toLowerCase()) {
							case "text":
								return <FormInput key={index} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "textarea":
								return <FormTextarea key={index} textarea={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;				  
							case "email":
								return <FormInput key={index} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "password":
								return <FormInput key={index} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "select":
								return <FormSelectBox key={index} selectbox={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "checkbox": 
								return <FormCheckBox key={index} checkbox={field} value={formValues[field.name]} isInvalid={isInvalid} onChange={handleInputChange} />;
							case "radio":
								return <FormRadio key={index} radio={field} value={formValues[field.name]} isInvalid={isInvalid} onChange={handleInputChange} />;
							case "file":
								return <FormFile key={index} file={field} value={formValues[field.name]} isInvalid={isInvalid} onChange={handleInputChange} />;
							case "hidden":
								return <FormHidden key={index} hidden={field} />;
							case "button":
								return <FormButton key={index} button={field} value={field.value} />;
							case "image":
								return <FormImage key={index} image={field} />
							default:
								return null;
						}
					})}

					</fieldset>
				))
			}
			</>
		)}

		{showPreviousBtn()}
		{showNextBtn()}
		{showSubmitBtn()}

    </form>
  );
}

export default DisplayForm;
