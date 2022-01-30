import React from 'react';
import color from 'color';
import styled from 'styled-components';
import ChallengeCircle from './ChallengeCircle';
import ChallengeName from '../ChallengeInfo/ChallengeTitle';
import InfoDetail from '../ChallengeInfo/InfoDetail';

function ChallengeCard() {
  return (
    <Card>
      <ChallengeCircle />
      <Wrapper>
        <ChallengeName />
        <InfoDetail />
      </Wrapper>
    </Card>
  );
}

const Card = styled.div`
  position: fixed;
  padding-top: 24px;
  width: 100%;
  height: 107px;
  background-color: ${color.bgWhite};
  box-shadow: 4px 8px 24px rgba(173, 173, 173, 0.12);
  border-radius: 12px;
`;

const Wrapper = styled.div`
  height: 51px;
  margin-bottom: 100px;
`;
export default ChallengeCard;
