import React from 'react';

function InputFileUpload({ label, input, callback }){
    console.log('Forms/views/InputFileUpload.js InputFileUpload() invoked');
    console.debug('Forms/views/InputFileUpload.js: InputFileUpload() input = '+JSON.stringify(input));

    const {id, type, value, onClick, error, required, ...inputProps} = input;
    const {text: labelText, ...labelProps} = label;

    return (
        <div className={required ? 'required' : null}>
            <label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
            <input
                type='file'
                id={id}
                onClick={callback}
                {...inputProps}
                value={value} 
            />
            {error && <p>{error}</p>}
        </div>
    );
};

export default InputFileUpload;