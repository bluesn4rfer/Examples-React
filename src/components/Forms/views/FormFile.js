import React from 'react';

function FormFile({file, callback}){
    console.log('Forms/views/FormFile.js FormFile() invoked');
    console.debug('Forms/views/FormFile.js: FormFile() button = '+JSON.stringify(file));

    const {id, label = {}, type, value, onClick, ...props} = file;
    const {text: labelText, ...labelProps} = label;

    return (
        <>
            <label htmlFor={id} {...labelProps}>{labelText}</label>
            <button
                type={type}
                id={id}
                onClick={callback}
                {...props}
            >{value}</button>
        </>
    );
};

export default FormFile;