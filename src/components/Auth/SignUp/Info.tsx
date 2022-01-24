import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <div>
      <InfoTxt>개인정보 수집 및 이용에 동의합니다.</InfoTxt>
    </div>
  );
}
const InfoTxt = styled.span`
  width: 206px;
  height: 24px;
  margin-left: 23px;
  margin-bottom: 51px;
`;

export default Info;
