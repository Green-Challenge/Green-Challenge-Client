import React from 'react';
import styled from 'styled-components';

function OnBoardImage() {
  return (
    <div>
      <Img src="http://placehold.it/300x300/" alt="img" />
    </div>
  );
}

const Img = styled.img`
  margin-top: 24px;
  width: 360px;
  height: 300px;
`;
export default OnBoardImage;
