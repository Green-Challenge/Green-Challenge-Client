import React from 'react';
import styled from 'styled-components';
import color from 'color';

function Description() {
  return (
    <Desc>
      <div> 텍스트를 이곳에 입력합니다. </div>
      <div>한 줄이 될 수도 있고 두 줄이 될 수도 있습니다.</div>
    </Desc>
  );
}

const Desc = styled.div`
  width: 100%;
  height: 3rem;
  line-height: 1.5rem;
  color: ${color.bodyFont03};
  text-align: center;
  font-size: 0.875rem;
`;
export default Description;
