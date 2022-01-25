import color from 'color';
import Button from 'components/common/Button';
import styled from 'styled-components';
import {ChallengeImage} from '../common';
import Progress from './Progress';

interface ChallengingCardProps {
  progress: number;
  numberOfPersion: number;
  target: string;
  imageSrc: string;
  currentDistance: string;
}

function ChallengingCard({
  imageSrc,
  numberOfPersion,
  progress,
  target,
  currentDistance,
}: ChallengingCardProps) {
  return (
    <Wrapper>
      <ChallengeImage imageSrc={imageSrc} numberOfPersion={numberOfPersion} />
      <Progress
        currentDistance={currentDistance}
        progress={progress}
        target={target}
      />
      <RoundButton>시작</RoundButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px 24px 0;
  background-color: ${color.bgWhite};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  text-align: center;
`;
const RoundButton = styled(Button)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${color.primary};
  margin: 54px 0 40px;
  font-size: 20px;
`;

export {ChallengingCard};
