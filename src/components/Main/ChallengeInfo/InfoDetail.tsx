import React from 'react';
import styled from 'styled-components';

// 리워드 토큰 + 참가자수(number of person)
function InfoDetail() {
  return <Wrapper>토큰, 참가자수</Wrapper>;
}

const Wrapper = styled.div`
  width: 102px;
  height: 16px;
  padding-bottom: 45px;
  padding-left: 129px;
`;
export default InfoDetail;
