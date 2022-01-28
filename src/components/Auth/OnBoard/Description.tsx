import React from 'react';
import styled from 'styled-components';
import color from 'color';

function Description() {
  return (
    <Desc>
      텍스트를 이곳에 입력합니다. <br /> 한 줄이 될 수도 있고 두 줄이 될 수도
      있습니다.
    </Desc>
  );
}

const Desc = styled.div`
  font-family: Noto Sans KR;
  font-size: 14px;
  color: ${color.bodyFont03};
  width: 100%;
  height: 48px;
  line-height: 24px;
  text-align: center;
`;
export default Description;
