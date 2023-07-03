import React from 'react';

function FormFile({file, callback}){
    console.log('Forms/views/FormFile.js FormFile() invoked');
    console.debug('Forms/views/FormFile.js: FormFile() button = '+JSON.stringify(file));

    const {id, label = {}, type, value, onClick, error, required, ...props} = file;
    const {text: labelText, ...labelProps} = label;

    return (
        <div className={required ? 'required' : null}>
            <label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
            <input
                type='file'
                id={id}
                onClick={callback}
                {...props}
                value={value} 
            />
            {error && <p>{error}</p>}
        </div>
    );
};

export default FormFile;