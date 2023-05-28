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

function DisplayForm({ formData, callback }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [showReview, setShowReview] = useState(false);

  console.log('Forms/Controller.js: formData = '+JSON.stringify(formData));
  console.log('Forms/Controller.js: currentStep = '+currentStep);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log("Forms/Controller.js: formValues = ", JSON.stringify(formValues));
    if(callback){
      event.preventDefault();
      callback(formValues);
    }
  };

  const handleNextStep = () => {
    console.log('Forms/Controller.js handleNextStep() invoked');
    if(currentStep == formData.steps.length - 1){
      setShowReview(true);
    }
    else{
      setCurrentStep((prevStep) => prevStep + 1);
    }
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

  const currentStepFields = formData.steps[currentStep].fields;

  const isStepValid = () => {
    return currentStepFields.every(
      (field) =>
        !field.required ||
        (formValues[field.name] !== undefined && formValues[field.name] !== "")
    );
  };

  return (
    <form onSubmit={handleSubmit}>
       {showReview ? (
         <>
         <FormReview formData={formData} formValues={formValues} setShowReview={setShowReview} />
         </>
      ) : (
        <>
      <h2>{formData.steps[currentStep].title}</h2>
      {currentStepFields.map((field, index) => {
        switch (field.type) {
          case "text":
          case "password":
          case "email":
            return <FormInput key={index} inputData={field} inputValue={formValues[field.name]} callback={handleInputChange} />;
          case "textarea":
            return <FormTextarea key={index} textareaData={field} textareaValue={formValues[field.name]} callback={handleInputChange} />;
          case "select":
            return <FormSelectBox key={index} selectboxData={field} selectboxValue={formValues[field.name]} callback={handleInputChange} />;
          case "button":
            return <FormButton buttonData={field} buttonValue={field.value} />;
          default:
            return null;
        }
      })}
        </>
      )}

      {currentStep > 0 && currentStep < formData.steps.length && (
        <FormButton buttonData={{type: 'button', style: {float: 'left'}}} buttonValue="Previous" callback={handlePrevStep} />
      )}
      {!showReview && currentStep < formData.steps.length && (
        <FormButton buttonData={{type: 'button', style: {float: 'right'}}} buttonValue="Next" callback={handleNextStep} />
      )}
      {showReview && (
        <FormButton buttonData={{type: 'submit', style: {float: 'right'}}} buttonValue={formData.submit.value || "Submit"} callback={handleNextStep} />
      )}

    </form>
  );
}

export default DisplayForm;
