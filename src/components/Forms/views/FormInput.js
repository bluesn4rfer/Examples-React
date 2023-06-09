import React from 'react';

function FormInput ({ div, input, value, callback }){
  const { id, type, label, error, required, ...props} = input;

  console.log('FormInput.js invoked');
  return (
    <div>
      <label htmlFor={id}>{label}{required ? <span className='required'>*</span> : null}</label>
      <input
        type={type}
        id={id}
        defaultValue={value}
        onInput={callback}
        required={required}
        {...props} // spread the rest of the props onto the input element
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormInput;