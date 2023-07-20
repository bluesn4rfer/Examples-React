import React from 'react';

function InputText({
	input = { id: '', type: 'text', error: null, required: false, onChange: () => {} },
	value = '',
	label = { text: '', htmlFor: '' },
	className = '',
	isInvalid = false,
	callback = () => {},
}) {
	console.log('Forms/views/InputText.js InputText() invoked');
	const { id, type, error, required, onChange, ...inputProps } = input;
	const { text: labelText, ...labelProps } = label;

	const handleChange = (event) => {
		callback(event); // Call the callback function passed from the parent property
		if (onChange && typeof onChange === 'function') {
			onChange(event); // Call the onChange function passed from the input property
		}
	};

	return (
		<div className={`${className} ${required ? 'required' : ''} ${isInvalid ? 'invalid' : ''}`}>
		<label htmlFor={id} {...labelProps}>
			{labelText}
			{required && <span>*</span>}
		</label>
		<input
			type={type}
			id={id}
			value={value}
			onChange={handleChange}
			required={required}
			{...inputProps} // Spread the rest of the inputProps onto the input element
		/>
		{error && <p>{error}</p>}
		</div>
	);
}

export default InputText;