import ChallengeCircle from './ChallengeCircle';
import styled from 'styled-components';
import color from 'color';
import ChallengeInfo from './ChallengeInfo';

function ChallengeCard() {
  return (
    <Card>
      <Wrapper>
        <ChallengeCircle />
      </Wrapper>
      <Wrapper>
        <ChallengeInfo />
      </Wrapper>
      <Wrapper>
        <Button>☘</Button>
      </Wrapper>
    </Card>
  );
}

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  height: 8rem;
  background-color: ${color.bgWhite};
  box-shadow: 0.25rem 0.5rem 1.5rem rgba(173, 173, 173, 0.12);
  border-radius: 0.75rem;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const Div = styled.div`
  display: inline-block;
  margin-left: 1.063rem;
`;

const Button = styled.div`
  width: 5px;
  height: 10px;
`;
export default ChallengeCard;
