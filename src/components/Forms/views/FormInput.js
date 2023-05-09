import React from 'react';

function FormInput ({ inputData, inputValue, callback }){
  const { id, type, label, class: className, error, ...props} = inputData;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={inputValue}
        onChange={callback}
        className={className}
        {...props} // spread the rest of the props onto the input element
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormInput;