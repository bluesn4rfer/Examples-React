import React from 'react';

function InputCheckbox({ input, label, value, error, onChange: callback }) {
	const { id, name, required, onChange, options, ...inputProps } = input;
	const { text: labelText, ...labelProps } = label;

	console.debug('Forms/views/InputCheckbox.js inputProps = ' + JSON.stringify(inputProps));

	const isChecked = (optionValue) => {
		if (Array.isArray(value)) {
			return value.includes(optionValue);
		}
		return value === optionValue;
	};

	return (
		<div className={required ? 'required' : null}>
			<label htmlFor={id} {...labelProps}>
				{labelText}
				{required && <span>*</span>}
			</label>
			{options ? (
				options.map((option, index) => (
					<div key={index}>
						<input
							type="checkbox"
							id={`${id}-${index}`}
							name={name}
							value={option.value}
							checked={isChecked(option.value)}
							onChange={onChange}
							{...inputProps}
						/>
						<label htmlFor={`${id}-${index}`}>{option.label}</label>
					</div>
				))
			) : (
				<div>
					<input
						type="checkbox"
						id={id}
						name={name}
						checked={isChecked(true)}
						onChange={onChange}
						{...inputProps}
					/>
					<label htmlFor={id}>{labelText}</label>
				</div>
			)}
			{error && <p>{error}</p>}
		</div>
	);
}

export default InputCheckbox;
