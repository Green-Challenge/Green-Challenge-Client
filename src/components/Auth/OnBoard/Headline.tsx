import React from 'react';
import styled from 'styled-components';

function Headline() {
  return <H3>헤드라인</H3>;
}
const H3 = styled.div`
  width: 100%;
  height: 32px;
  text-align: center;
  font-weight: bold;
  margin-top: 344px;
  margin-bottom: 8px;
`;
export default Headline;
