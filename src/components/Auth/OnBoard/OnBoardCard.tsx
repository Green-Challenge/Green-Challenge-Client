import React from 'react';
import OnBoardImage from './OnBoardImage';
import styled from 'styled-components';
import Headline from './Headline';
import Description from './Description';
import Button from 'components/common/Button';

function OnBoardCard() {
  return (
    <Wrapper>
      <OnBoardImage />
      <Headline />
      <Description />
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

export default OnBoardCard;
