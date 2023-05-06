import React, { useState } from 'react';

function FormReview({formData, formValues, setShowReview}){
    return (
        <>
        <h2>Review your submission</h2>
        {Object.entries(formValues).map(([name, value]) => (
            <div key={name}>
                <strong>{name}:</strong> {value}
            </div>
        ))}
        <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowReview(false)}>
                Edit
            </button>
        </div>
        </>
    );
};

export default FormReview;