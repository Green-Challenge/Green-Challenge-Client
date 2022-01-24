import React from 'react';
import styled from 'styled-components';

function CommonBtn() {
  return <Btn>버튼</Btn>;
}

const Btn = styled.div`
  width: 312px;
  height: 56px;
  line-height: 56px;
  margin-left: 24px;
  border-radius: 10px;
  background-color: #29d3c6;
  color: #fff;
  text-align: center;
`;

export default CommonBtn;
