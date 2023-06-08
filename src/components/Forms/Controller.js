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
import FormSelectBox from './views/FormSelectBox';
import FormTextarea from './views/FormTextarea';
import FormButton from './views/FormButton';
import FormReview from './views/FormReview';

function DisplayForm({ form: formData, callback }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [showReview, setShowReview] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  console.log('Forms/Controller.js: formData = '+JSON.stringify(formData));
  console.log('Forms/Controller.js: currentStep = '+currentStep);

  const currentStepFields = formData.steps[currentStep].fields;

  const isStepValid = () => {
    const invalidFields = currentStepFields
      .filter(
        (field) =>
          field.required &&
          (formValues[field.name] === undefined || formValues[field.name] === "")
      )
      .map((field) => field.name);

    setInvalidFields(invalidFields);
    return invalidFields.length === 0;
  };

  const handleInputChange = (event) => {
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
    if(currentStep === formData.steps.length - 1){
      if(formData.showReview === true){
        console.log('Forms/Controller.js handleNextStep() setShowReview true');
        setShowReview(true);
      }
      else{
        console.log('Forms/Controller.js handleNextStep() handleSubmit()');
        handleSubmit();
      }
    }
    else{
      if(isStepValid()){
        console.log('Forms/Controller.js handleNextStep() isStepValid() true');
        setCurrentStep((prevStep) => prevStep + 1);
      }
      else{
        console.log('Forms/Controller.js handleNextStep() isStepValid() false');
      }
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
    const { value = 'Previous', style = {}, ...props } = formData.buttons?.previous;

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
  }

  const showNextBtn = () => {
	if((currentStep < formData.steps.length - 1) || ((formData.showReview === true) && !showReview)){
    const { value = 'Next', style = {}, ...props } = formData.buttons?.next;

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
  }

  const showSubmitBtn = () => {
    if(((currentStep >= formData.steps.length - 1) && formData.showReview !== true) || (formData.showReview === true && showReview)){
      const { value = 'Submit', style = {}, ...props } = formData.buttons?.submit;

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
  }

  return (
    <form onSubmit={handleSubmit}>
       {showReview ? (
         <FormReview formData={formData} formValues={formValues} setShowReview={setShowReview} />
      ) : (
        <>
      <h2>{formData.steps[currentStep].title}</h2>
      {invalidFields ? (
        currentStepFields.map((field, index) => {
          return (invalidFields.includes(field.name) ? <b>Missing required field: {field.label}<br /></b> : null);
        })
      ) : null}
      {currentStepFields.map((field, index) => {
        const isInvalid = invalidFields.includes(field.name);

        switch (field.type) {
          case "text":
          case "password":
          case "email":
            return <FormInput key={index} inputData={field} inputValue={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
          case "textarea":
            return <FormTextarea key={index} textareaData={field} textareaValue={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
          case "select":
            return <FormSelectBox key={index} selectboxData={field} selectboxValue={formValues[field.name]} isInvalid={isInvalid} callback={handleInputChange} />;
          case "button":
            return <FormButton button={field} buttonValue={field.value} />;
          default:
            return null;
        }
      })}
        </>
      )}

	  {showPreviousBtn()}
	  {showNextBtn()}
	  {showSubmitBtn()}

    </form>
  );
}

export default DisplayForm;
