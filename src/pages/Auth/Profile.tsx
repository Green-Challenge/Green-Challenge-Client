import React, {useState} from 'react';
import Button from 'components/common/Button';
import color from 'color';
import styled from 'styled-components';
import ProfileContent from 'components/Auth/Profile/ProfileContent';

// interface ProfileProps {
//   Login: any;
//   error: any;
// }

function Profile() {
  return (
    <Wrapper>
      <form>
        <h2>프로필</h2>
        <ProfileContent />
        <Button type="submit">확인</Button>
      </form>
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
export {Profile};
