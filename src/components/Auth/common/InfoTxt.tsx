import React from 'react';
import styled from 'styled-components';
import color from 'color';

const InfoTxt = styled.div<{textAlign?: boolean}>`
  float: left;
  font-family: Noto Sans KR;
  font-size: 14px;
  text-align: ${props => (props.textAlign ? 'center' : 'start')};
  color: ${color.bodyFont03};
  width: 100%;
  height: 24px;
  margin-top: 100px;
  /* margin-left: 53px; */
`;

export default InfoTxt;
