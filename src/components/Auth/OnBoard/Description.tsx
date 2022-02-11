import React from 'react';
import styled from 'styled-components';
import color from 'color';

function Description() {
  return (
    <Desc>
      <div>이웃들과 함께 친환경 챌린지에 도전하고,</div>
      <div>나무 캐릭터를 키워 지구에게 선물해 주세요.</div>
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
