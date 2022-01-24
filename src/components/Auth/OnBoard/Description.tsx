import React from 'react';
import styled from 'styled-components';

function Description() {
  return (
    <Desc>
      텍스트를 이곳에 입력합니다. 한 줄이 될 수도 있고 두 줄이 될 수도 있습니다.
    </Desc>
  );
}

const Desc = styled.div`
  width: 265px;
  height: 48px;
  font-size: 14px;
  text-align: center;
  margin-left: 48px;
  margin-bottom: 91px;
`;
export default Description;
