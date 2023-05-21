import React from 'react';

function FormTextarea({textareaData, textareaValue, callback}){
    const { class: textareaClass, ...textareaProps } = textareaData;
    return (
        <div>
            <label htmlFor={textareaProps.id}>{textareaProps.placeholder}</label>
            <textarea
                className={textareaClass}
                value={textareaValue}
                onChange={callback}
                {...textareaProps}
            />
        </div>
    );
};

export default FormTextarea;