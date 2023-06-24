import { useState } from 'react';

function FormRadio({ radio, value, error, callback }) {
	const { id, label, required, onChange, options, ...props } = radio;
	const { text: labelText, ...labelProps } = label;

	const [selectedOption, setSelectedOption] = useState('');

	function handleOptionChange(event) {
		setSelectedOption(event.target.value);
	}

	return (
		<div className={required ? 'required' : null}>
			<label htmlFor={id} {...labelProps}>{labelText}{required ? <span>*</span> : null}</label>
			{options.map((option,index) => (
				<label key={index}>
				<input type="radio" value={option.value} checked={selectedOption === option.value} onChange={handleOptionChange} />
				{option.label}
				</label>
			))}
			{error && <p>{error}</p>}
		</div>
	);
}

export default FormRadio;