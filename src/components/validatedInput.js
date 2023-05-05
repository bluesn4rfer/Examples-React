import React, { useState } from 'react';

const validatedInput = ({ inputName, inputType, validator, ...restProps }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    validateInput(inputValue);
  };

  const validateInput = (value) => {
    const isValid = validator(value);
    setIsValid(isValid);
  };

  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        type={inputType}
        id={inputName}
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderColor: isValid ? 'green' : 'red' }}
        {...restProps} // spread the rest of the props onto the input element
      />
      {!isValid && <p>Please enter a valid {inputName}</p>}
    </div>
  );
};

export default validatedInput;