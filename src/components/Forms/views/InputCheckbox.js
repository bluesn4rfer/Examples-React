import React from 'react';

function InputCheckbox({ input, label, value, error, onChange: callback }) {
	const { id, name, required, onChange, options, ...inputProps } = input;
	const { text: labelText, ...labelProps } = label;

	console.debug('Forms/views/InputCheckbox.js inputProps = '+JSON.stringify(inputProps));

	return (
		<div className={required ? 'required' : null}>
		<label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>

			{options.map((option, index) => (
				<div key={index}>
					<input type="checkbox" id={id} name={name} value={option.value} {...inputProps}/>
					<label for={id}>{option.label}</label>
				</div>
			))}
		{error && <p>{error}</p>}
		</div>
	);
}

export default InputCheckbox;