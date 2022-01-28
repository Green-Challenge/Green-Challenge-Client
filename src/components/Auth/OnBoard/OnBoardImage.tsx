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
  margin: 24px 0;
  width: 100%;
  height: 320px;
`;
export default OnBoardImage;
