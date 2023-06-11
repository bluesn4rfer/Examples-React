import React from 'react';

function FormReview({form, values, setShowReview}){
    return (
        <>
        <h2>Review your submission</h2>
        {
            form.map((step, stepIndex) => {
                console.log('Forms/views/FormReview.js: step = '+JSON.stringify(step));

                return (    
                    <div key={'step'+stepIndex}>
                        <h3>{step.title}</h3>
                        {step.fields.map((field, fieldIndex) => (
                            <div key={'field'+fieldIndex}>
                                <strong>{field.label.text}:</strong> {values[field.name]}
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