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
  color: ${color.bodyFont03};
  width: 265px;
  height: 48px;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  margin-left: 48px;
  margin-bottom: 77px;
`;
export default Description;
