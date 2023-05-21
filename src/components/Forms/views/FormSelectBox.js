import React from 'react';

function FormSelectBox({ selectboxData, selectboxValue, callback }) {
  const { class: selectboxClass, ...selectboxProps } = selectboxData;
  console.log('Forms/views/FormSelectBox.js selectboxProps = '+JSON.stringify(selectboxProps));

  return (
    <div>
      <select value={selectboxValue} onChange={callback} className={selectboxClass} {...selectboxProps} >
        <option value="">Select an option</option>
        {selectboxData.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectboxData.error && <p>{selectboxData.error}</p>}
    </div>
  );
}

export default FormSelectBox;