import React from 'react';

function FormSelectBox({ selectboxData, selectboxValue, error, callback }) {
  const { id, label, ...selectboxProps } = selectboxData;
  console.log('Forms/views/FormSelectBox.js selectboxProps = '+JSON.stringify(selectboxProps));

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={selectboxValue} onChange={callback} {...selectboxProps} >
        <option value="">Select an option</option>
        {selectboxData.options.map((option, index) => (
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