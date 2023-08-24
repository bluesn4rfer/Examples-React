import React from 'react';

function FormReview({form, values, getFieldFromData, setShowReview}){
    console.log('Forms/views/FormReview.js: FormReview() invoked')
    return (
        <>
        <h2>Review your submission</h2>
        {
            form.map((step, stepIndex) => {
                console.debug('Forms/views/FormReview.js: step = '+JSON.stringify(step));

                return (    
                    <div key={'step'+stepIndex}>
                        <h3>{step.title}</h3>
                        {
                            step.fields.map((data, fieldIndex) => {
                                const { type, label } = data;
                                const field = getFieldFromData(data);

                                return (
                                <div key={'field'+fieldIndex}>
                                    <strong>{label.text}:</strong> {values[field.name]}
                                </div>
                                )
                            })
                        }
                    </div>
                );
            })
        }
        </>
    );
};

export default FormReview;