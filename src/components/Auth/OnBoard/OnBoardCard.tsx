import React from 'react';
import OnBoardImage from './OnBoardImage';
import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';
import Headline from './Headline';
import Description from './Description';

function OnBoardCard() {
  return (
    <Wrapper>
      <OnBoardImage />
      <Headline />
      <Description />
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

export default OnBoardCard;
