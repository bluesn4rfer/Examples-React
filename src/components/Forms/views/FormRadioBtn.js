import { useState } from 'react';

function FormRadioBtn() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  const options = [
    { id: 1, label: 'Option 1', value: 'option1' },
    { id: 2, label: 'Option 2', value: 'option2' },
    { id: 3, label: 'Option 3', value: 'option3' }
  ];

  function handleSubmit(event) {
    event.preventDefault();
    if (selectedOption) {
      // submit form
    } else {
      // show error message
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {options.map(option => (
          <label key={option.id}>
            <input type="radio" value={option.value} checked={selectedOption === option.value} onChange={handleOptionChange} />
            {option.label}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormRadioBtn;