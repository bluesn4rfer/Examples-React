import React from 'react';

function InputText({
	input = { id: '', type: 'text', error: null, required: false },
	value = '',
	label = { text: '', htmlFor: '' },
	className = '',
	isInvalid = false,
	onChange = () => {},
}) {
	const { id, type, error, required, ...inputProps } = input;
	const { text: labelText, ...labelProps } = label;

	const handleChange = (event) => {
		onChange(event); // Call the onChange function passed from the parent component
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