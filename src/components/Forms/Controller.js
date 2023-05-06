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
import FormReview from './views/FormReview';

function DisplayForm({ formData }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [showReview, setShowReview] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (showReview) {
      // Submit the form data to the server
      console.log("Submitting form data:", formValues);
    } else {
      setShowReview(true);
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
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
         <FormReview formData={formData} formValues={formValues} setShowReview={setShowReview} />
      ) : (
        <>
      <h2>{formData.steps[currentStep].title}</h2>
      {currentStepFields.map((field, index) => {
        switch (field.type) {
          case "text":
          case "email":
            return <FormInput key={index} inputData={field} inputValue={formValues[field.name]} callback={handleInputChange} />;
          case "textarea":
            return <FormTextarea key={index} textareaData={field} textareaValue={formValues[field.name]} callback={handleInputChange} />;
          case "select":
            return <FormSelectBox key={index} selectboxData={field} selectboxValue={formValues[field.name]} callback={handleInputChange} />;
          case "submit":
            return (
              <div key={index}>
                <button type="submit" className={field.class}>
                  {field.value}
                </button>
              </div>
            );
          default:
            return null;
        }
      })}
        </>
      )}

      {currentStep > 0 && (
        <button type="button" onClick={handlePrevStep}>
          Previous
        </button>
      )}
      {currentStep < formData.steps.length - 1 && (
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      )}
    </form>
  );
}

export default DisplayForm;
