import React from 'react';

function FormFile({file, callback}){
    console.log('Forms/views/FormFile.js FormFile() invoked');
    console.debug('Forms/views/FormFile.js: FormFile() button = '+JSON.stringify(file));

    const {id, label = {}, type, value, onClick, ...props} = file;
    const {text: labelText, ...labelProps} = label;

    return (
        <>
            <label htmlFor={id} {...labelProps}>{labelText}</label>
            <input
                type='file'
                id={id}
                onClick={callback}
                {...props}
                value={value} 
            />
        </>
    );
};

export default FormFile;