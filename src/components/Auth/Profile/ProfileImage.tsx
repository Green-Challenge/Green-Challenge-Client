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
  margin-bottom: 1.563rem;
  width: 10rem;
  height: 10rem;
`;

// const ImgInput = styled.input`
//   z-index: 30;
//   margin-bottom: 1.563rem;
//   width: 10rem;
//   height: 10rem;
//   background-color: gray;
//   border-radius: 0.5rem;
// `;

export default ProfileImage;
