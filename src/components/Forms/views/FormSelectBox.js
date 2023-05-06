import React, { useState } from 'react';

function FormSelectBox({ selectboxData, selectboxValue, callback }) {
  return (
    <div>
      <select value={selectboxValue} onChange={callback} className={selectboxData.class} {...selectboxData} >
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