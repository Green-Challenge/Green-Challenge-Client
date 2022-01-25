import React from 'react';
import styled from 'styled-components';

function ProfileImage() {
  return (
    <div>
      <Img src="http://placehold.it/300x300/" alt="img" />
    </div>
  );
}

const Img = styled.img`
  margin: 24px 100px 20px 100px;
  width: 160px;
  height: 160px;
`;

export default ProfileImage;
