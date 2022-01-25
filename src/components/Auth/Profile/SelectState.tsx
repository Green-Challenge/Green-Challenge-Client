import React from 'react';

function SelectState() {
  return (
    <>
      <select>
        <option key="gangnam" value="gangnam">
          강남구
        </option>
        <option key="seocho" value="seocho">
          서초구
        </option>
        <option key="mapo" value="mapo">
          마포구
        </option>
      </select>
    </>
  );
}

export default SelectState;
