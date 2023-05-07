import React, { useState } from 'react';

function FormButton({buttonData, buttonValue, callback}){
    console.log('FormButton.js: buttonData = '+JSON.stringify(buttonData));

    return (
        <>
            <label htmlFor={buttonData.id}>{buttonData.label}</label>
            <button
                type={buttonData.type}
                name={buttonData.name}
                id={buttonData.id}
                className={buttonData.class}
                onClick={callback}
                {...buttonData}
            >{buttonValue}</button>
        </>
    );
};

export default FormButton;