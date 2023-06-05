import React from 'react';

function FormButton({button: buttonData, callback}){
    console.log('FormButton.js: buttonData = '+JSON.stringify(buttonData));

    const {id, label, type, value, onClick, ...props} = buttonData;

    return (
        <>
            <label htmlFor={id}>{label}</label>
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