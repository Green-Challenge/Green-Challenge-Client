import React from 'react';
import color from 'color';
import styled from 'styled-components';
import ChallengeCircle from './ChallengeCircle';

function ChallengeCard() {
  return (
    <Card>
      <Wrapper>
        <ChallengeCircle />

        <p>뚜벅이 출퇴근</p>

        <button>버튼</button>
      </Wrapper>
    </Card>
  );
}

const Card = styled.div`
  padding-top: 1.313rem;
  width: 100%;
  height: 6.688rem;
  background-color: ${color.bgWhite};
  box-shadow: 0.25rem 0.5rem 1.5rem rgba(173, 173, 173, 0.12);
  border-radius: 0.75rem;
`;

const Wrapper = styled.div`
  display: flex;
  height: 51px;
`;

export default ChallengeCard;
