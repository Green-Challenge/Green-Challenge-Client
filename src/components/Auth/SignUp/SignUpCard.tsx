import React from 'react';
import CommonBtn from '../common/CommonBtn';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';
import Info from './Info';

function SignUpCard() {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SignUpForm />
      <Info />
      <CommonBtn />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 360px;
  background-color: white;
`;

const Title = styled.h4`
  margin-top: 46px;
  text-align: center;
`;

export default SignUpCard;
