import React from 'react';

function FormHidden({hidden, callback}){
    console.log('Forms/views/FormHidden.js FormHidden() invoked');
    console.debug('Forms/views/FormHidden.js: FormHidden() button = '+JSON.stringify(hidden));

    const {id, label = {}, type, value, onClick, ...props} = hidden;
    const {text: labelText, ...labelProps} = label;

    return (
        <>
            <label htmlFor={id} {...labelProps}>{labelText}</label>
            <input
                type='hidden'
                id={id}
                onClick={callback}
                {...props}
                value={value} 
            />
        </>
    );
};

export default FormHidden;