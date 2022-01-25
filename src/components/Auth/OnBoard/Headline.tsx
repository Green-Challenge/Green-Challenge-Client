import React from 'react';
import styled from 'styled-components';

function Headline() {
  return <H3>헤드라인</H3>;
}
const H3 = styled.div`
  width: 74px;
  height: 32px;
  font-family: Noto Sans KR;
  text-align: center;
  font-weight: bold;
  margin-top: 51px;
  margin-bottom: 12px;
  margin-left: 143px;
`;
export default Headline;
