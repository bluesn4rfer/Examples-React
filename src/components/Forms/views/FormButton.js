import React, { useState } from 'react';

function FormButton({buttonData, buttonValue, callback}){
    return (
        <div>
            <label htmlFor={buttonData.id}>{buttonData.placeholder}</label>
            <button
                name={buttonData.name}
                id={buttonData.id}
                className={buttonData.class}
                placeholder={buttonData.placeholder}
                required={buttonData.required}
                value={buttonValue}
                onChange={callback}
                {...buttonData}
            />
        </div>
    );
};

export default FormButton;