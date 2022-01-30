import React from 'react';
import color from 'color';
import styled from 'styled-components';
import ChallengeCircle from './ChallengeCircle';

function ChallengeCard() {
  return (
    <Card>
      <ChallengeCircle />
    </Card>
  );
}

const Card = styled.div`
  padding-top: 24px;
  width: 100%;
  height: 107px;
  background-color: ${color.bgWhite};
  box-shadow: 4px 8px 24px rgba(173, 173, 173, 0.12);
  border-radius: 12px;
`;
export default ChallengeCard;
