import React from 'react';
import styled from 'styled-components';

function SiName() {
  return (
    <select>
      <option key="seoul" value="seoul">
        서울시
      </option>
      <option key="daegu" value="daegu">
        대구시
      </option>
      <option key="busan" value="busan">
        부산시
      </option>
    </select>
  );
}

export default SiName;
