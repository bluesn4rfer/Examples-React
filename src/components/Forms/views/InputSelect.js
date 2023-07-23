import React from 'react';

function InputSelect({ label = {}, select = {}, value = '', error = '', callback = null }) {
	const { id, required, onChange, options, ...selectProps } = select;
	const { text: labelText, ...labelProps } = label;

	console.debug('Forms/views/InputSelect.js selectProps = '+JSON.stringify(selectProps));

	return (
		<div className={required ? 'required' : null}>
		<label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
		<select id={id} value={value} onChange={callback} required={required} {...selectProps} >
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

export default InputSelect;