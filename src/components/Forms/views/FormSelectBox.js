import React from 'react';

function FormSelectBox({ selectbox, value, error, callback }) {
	const { id, label, required, onChange, options, ...props } = selectbox;
	const { text: labelText, ...labelProps } = label;

	console.debug('Forms/views/FormSelectBox.js selectboxProps = '+JSON.stringify(props));

	return (
		<div className={required ? 'required' : null}>
		<label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
		<select id={id} value={value} onChange={callback} required={required} {...props} >
			<option value="">Select an option</option>
			{options.map((option, index) => (
			<option key={index} value={option.value}>
				{option.label}
			</option>
			))}
		</select>
		{error && <p>{error}</p>}
		</div>
	);
}

export default FormSelectBox;