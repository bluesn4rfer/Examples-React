import React from 'react';

function InputHidden({hidden, callback}){
    console.log('Forms/views/InputHidden.js InputHidden() invoked');
    console.debug('Forms/views/InputHidden.js: InputHidden() button = '+JSON.stringify(hidden));

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

export default InputHidden;