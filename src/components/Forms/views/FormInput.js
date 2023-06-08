import React from 'react';

function FormInput ({ inputData, inputValue, callback }){
  const { id, type, label, class: className, error, ...props} = inputData;

  console.log('FormInput.js invoked');
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        defaultValue={inputValue}
        onInput={callback}
        className={className}
        {...props} // spread the rest of the props onto the input element
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormInput;