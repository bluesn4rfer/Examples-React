import React, { useState } from 'react';

function FormInput ({ inputData, inputValue, callback }){
  return (
    <div>
      <label htmlFor={inputData.id}>{inputData.label}</label>
      <input
        type={inputData.type}
        id={inputData.id}
        value={inputValue}
        onChange={callback}
        className={inputData.class}
        {...inputData} // spread the rest of the props onto the input element
      />
      {inputData.error && <p>{inputData.error}</p>}
    </div>
  );
};

export default FormInput;