import React from 'react';

function InputCheckbox({ checkbox, value, error, onChange: callback }) {
	const { id, name, label, required, onChange, options, ...props } = checkbox;
	const { text: labelText, ...labelProps } = label;

	console.debug('Forms/views/InputCheckbox.js props = '+JSON.stringify(props));

	return (
		<div className={required ? 'required' : null}>
		<label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>

			{options.map((option, index) => (
				<div key={index}>
					<input type="checkbox" id={id} name={name} value={option.value} />
					<label for={id} >{option.label}</label>
				</div>
			))}
		{error && <p>{error}</p>}
		</div>
	);
}

export default InputCheckbox;