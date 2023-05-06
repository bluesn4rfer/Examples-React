import React, { useState } from 'react';

function FormTextarea({textareaData, textareaValue, callback}){
    return (
        <div>
            <label htmlFor={textareaData.id}>{textareaData.placeholder}</label>
            <textarea
                name={textareaData.name}
                id={textareaData.id}
                className={textareaData.class}
                placeholder={textareaData.placeholder}
                required={textareaData.required}
                value={textareaValue}
                onChange={callback}
                {...textareaData}
            />
        </div>
    );
};

export default FormTextarea;