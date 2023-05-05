import React, { useState } from 'react';

function validatedSelect({ options, onChange, validate }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    onChange(optionValue);
  };

  const validateSelection = () => {
    if (validate(selectedOption)) {
      return 'valid';
    } else {
      return 'invalid';
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange} className={validateSelection()}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {validateSelection() === 'invalid' && (
        <p style={{ color: 'red' }}>Please select a valid option</p>
      )}
    </div>
  );
}

export default validatedSelect;