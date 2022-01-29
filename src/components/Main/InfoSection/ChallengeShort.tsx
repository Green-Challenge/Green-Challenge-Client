import color from 'color';
import styled from 'styled-components';

interface ChallengeShortProps {
  dayOfChallenge: number;
  amountOfTree: number;
}

function ChallengeShort({dayOfChallenge, amountOfTree}: ChallengeShortProps) {
  return (
    <Wrapper>
      <Line>
        네이버스와 함께한지 <Span>{dayOfChallenge}일째</Span>
      </Line>
      <Line>
        지구에게 선물한 나무 <Span>{amountOfTree}그루</Span>
      </Line>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 0.875rem;
  padding: 1rem 1.5rem 0;
`;

const Line = styled.div``;

const Span = styled.span`
  color: ${color.primary};
`;

export default ChallengeShort;
