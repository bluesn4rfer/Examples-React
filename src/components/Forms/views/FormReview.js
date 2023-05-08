import React from 'react';

function FormReview({formData, formValues, setShowReview}){
    return (
        <>
        <h2>Review your submission</h2>
        {
            formData.steps.map((step, stepIndex) => {
                console.log('Forms/views/FormReview.js: step = '+JSON.stringify(step));

                return (    
                    <div key={'step'+stepIndex}>
                        <h3>{step.title}</h3>
                        {step.fields.map((field, fieldIndex) => (
                            <div key={'field'+fieldIndex}>
                                <strong>{field.label}:</strong> {formValues[field.name]}
                            </div>
                        ))}
                    </div>
                );
            })
        }
        </>
    );
};

export default FormReview;