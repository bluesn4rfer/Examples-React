import React from 'react';

function FormInput({ input = {}, value = '', label = {}, className = '', isInvalid = false, callback = null }) {
	console.log('Forms/views/FormInput.js FormInput() invoked');
	const { id, type = 'text', error, required, ...props } = input;
	const { text: labelText, ...labelProps } = label;

	const handleChange = (event) => {
		callback(event); // Call the callback function passed from the parent component
	};

	return (
		<div className={`${className} ${required ? 'required' : null} ${isInvalid ? 'invalid' : null}`}>
		<label htmlFor={id} {...labelProps}>
			{labelText}
			{required ? <span>*</span> : null}
		</label>
		<input
			type={type}
			id={id}
			defaultValue={value}
			onInput={handleChange}
			required={required}
			{...props} // spread the rest of the props onto the input element
		/>
		{error && <p>{error}</p>}
		</div>
	);
}

export default FormInput;
