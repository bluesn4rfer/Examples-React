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
import InputText from './views/InputText';
import InputTextarea from './views/InputTextarea';
import InputSelect from './views/InputSelect';
import InputCheckbox from './views/InputCheckbox';
import InputRadio from './views/InputRadio';
import InputRange from './views/InputRange';
import InputFileUpload from './views/InputFileUpload';
import InputHidden from './views/InputHidden';
import FormButton from './views/FormButton';

import FormReview from './views/FormReview';

import './forms.css';

function DisplayForm({ form, useReview = false, buttons = {}, callback }) {
	console.log('Forms/Controller.js DisplayForm() invoked');
	
	const [currentStep, setCurrentStep] = useState(0);
	const [formValues, setFormValues] = useState({});
	const [showReview, setShowReview] = useState(false);
	const [missingFields, setMissingFields] = useState([]);
	const [invalidFields, setInvalidFields] = useState([]);

	const {
		next: btnNext = {}, 
		previous: btnPrevious = {}, 
		submit: btnSubmit = {}
	} = buttons;

	console.debug('Forms/Controller.js: form = '+JSON.stringify(form));
	console.log('Forms/Controller.js: currentStep = '+currentStep);

	const isStepValid = () => {
		console.log('Forms/Controller.js isStepValid() invoked');

		const missingFields = form[currentStep].fields
		.filter(
			(data) => {
				const field = getFieldFromData(data);
				return field.required && (formValues[field.name] === undefined || formValues[field.name] === "");
			}
		)
		.map((data) => {
			const field = getFieldFromData(data);
			return field.name;
		});
		console.debug('Forms/Controller.js isStepValid() missingFields = '+missingFields);

		const invalidFields = form[currentStep].fields
		.filter(
			(data) => {
				const field = getFieldFromData(data);
				return field.required && !validateField(field);
			}
		)
		.map((field) => field.name);
		console.debug('Forms/Controller.js isStepValid() invalidFields = '+invalidFields);

		setMissingFields(missingFields);
		setInvalidFields(invalidFields);
		return missingFields.length + invalidFields.length === 0;
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

	const getFieldFromData = (data) => {
		console.log('Forms/Controller.js getFieldFromData() invoked');
		console.debug('Forms/Controller.js getFieldFromData() data = '+JSON.stringify(data));
		const { input, textarea, select, button } = data;
		return input || textarea || select || button || null;
	}

	console.debug('Forms/Controller.js missingFields = '+JSON.stringify(missingFields));
	console.debug('Forms/Controller.js invalidFields = '+JSON.stringify(invalidFields));
  return (
    <form onSubmit={handleSubmit}>
      	{showReview ? (
         	<FormReview form={form} values={formValues} getFieldFromData={getFieldFromData} setShowReview={setShowReview} />
		) : 
		(
			<>
			{
				form.map((step,stepIndex) => (
					<fieldset key={stepIndex} style={stepIndex !== currentStep ? {display: 'none'} : null}>
					<h2>{form[stepIndex].title}</h2>

					{missingFields ? (
						form[stepIndex].fields.map((data, index) => {
							const { type, label } = data;
							const field = getFieldFromData(data);
							switch (type.toLowerCase()){
								case "button":
								case "image":
									return null;
								default:
									return (missingFields.includes(field.name) ? <div key={index}>Missing required field: {label?.text}</div> : null);
							}
						})
					) : null}

					{form[stepIndex].fields.map((data, index) => {
						const { type, label } = data;
						const field = getFieldFromData(data);
						const isInvalid = invalidFields.includes(field.name);
			
						switch (type.toLowerCase()) {
							case "text":
								return <InputText key={index} label={label} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "textarea":
								return <InputTextarea key={index} label={label} textarea={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;				  
							case "email":
								return <InputText key={index} label={label} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "password":
								return <InputText key={index} label={label} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "select":
								return <InputSelect key={index} label={label} select={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "checkbox": 
								return <InputCheckbox key={index} label={label} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "radio":
								return <InputRadio key={index} label={label} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "range":
								return <InputRange key={index} label={label} input={field} min={data.min} max={data.max} isInvalid={isInvalid} callback={handleInputChange} />;
							case "file":
								return <InputFileUpload key={index} label={label} input={field} value={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
							case "hidden":
								return <InputHidden key={index} input={field} />;
							case "button":
								return <FormButton key={index} button={field} value={field.value} />;
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
