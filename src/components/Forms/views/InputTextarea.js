import React from 'react';

function InputTextarea({textarea, label, value, callback}){
    const { id, required, onChange, ...props } = textarea;
    const { text: labelText, ...labelProps } = label;

    return (
        <div className={required ? 'required' : null}>
            <label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
            <textarea
                id={id}
                value={value}
                onChange={callback}
                {...props}
            />
        </div>
    );
};

export default InputTextarea;