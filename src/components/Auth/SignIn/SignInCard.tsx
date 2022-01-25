import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

function SignInCard() {
  return (
    <Wrapper>
      로그인
      <Button />
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

export default SignInCard;
