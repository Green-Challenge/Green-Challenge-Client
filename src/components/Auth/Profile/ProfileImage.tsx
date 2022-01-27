import React from 'react';
import styled from 'styled-components';

function ProfileImage() {
  return (
    <Wrapper>
      <Img src="http://placehold.it/300x300/" alt="profile" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  margin-bottom: 25px;
  width: 160px;
  height: 160px;
`;

export default ProfileImage;
