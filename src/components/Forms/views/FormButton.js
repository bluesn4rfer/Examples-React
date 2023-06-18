import React from 'react';

function FormButton({button, callback}){
    console.log('Forms/views/FormButton.js FormButton() invoked');
    console.debug('Forms/views/FormButton.js: FormButton() button = '+JSON.stringify(button));

    const {id, label = {}, type, value, onClick, ...props} = button;
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

export default FormButton;