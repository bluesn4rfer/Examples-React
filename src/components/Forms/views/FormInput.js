import React from 'react';

function FormInput ({ div, input, value, callback }){
	console.log('Forms/views/FormInput.js FormInput() invoked');
	const { id, type = 'text', label = {}, error, required, ...props } = input;
	const { text: labelText, ...labelProps } = label;

	return (
		<div className={required ? 'required' : null}>
		<label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
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