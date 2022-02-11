import color from 'color';
import Button from 'components/common/Button';
import useChallengeStartAction from 'hooks/challenge/useChallengeStartAction';
import {useAppSelector} from 'hooks/storeHooks';
import {useEffect, useRef, useState} from 'react';
import {ChallengeService} from 'service/challenges/challenges';
import styled, {css} from 'styled-components';
import {Distance, getCurrentLocation} from 'utils/getLocation';
import {ChallengeImage} from '../common';
import Progress from './Progress';

interface ChallengingCardProps {
  progress: number;
  numberOfPersion: number;
  target: number;
  imageSrc: string;
  currentDistance: number;
  challengeId: number;
}

const TIME_INTERVAL_LOCATION = 1000;

function ChallengingCard({
  imageSrc,
  numberOfPersion,
  progress,
  target,
  currentDistance,
  challengeId,
}: ChallengingCardProps) {
  const timerIdRef = useRef<number>();
  const movedDistance = useRef<Distance>({
    latitude: 0,
    longitude: 0,
    distance: 0,
  });
  const {isStart} = useAppSelector(state => state.challenges.challenging);
  const {userId} = useAppSelector(state => state.auth.isAuth);
  const [isStarting, setIsStarting] = useState(isStart);
  const {startChallenge, stopChallenge} = useChallengeStartAction();

  const onClickStart = () => {
    setIsStarting(true);
    startChallenge({challengeId});
    movedDistance.current = {
      longitude: 0,
      latitude: 0,
      distance: 0,
    };
    timerIdRef.current = window.setInterval(() => {
      getCurrentLocation(movedDistance);
    }, TIME_INTERVAL_LOCATION);
  };

  const onClickStop = () => {
    setIsStarting(false);
    window.clearInterval(timerIdRef.current);
    stopChallenge();
    ChallengeService.addChallengeRecord({
      // achieved: movedDistance.current.distance,
      achieved: 15,
      challengeId,
      userId: userId!,
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    return () => {
      if (isStarting) {
        // onClickStop();
      }
    };
  });

  return (
    <Wrapper>
      <ChallengeImage imageSrc={imageSrc} numberOfPersion={numberOfPersion} />
      <Progress
        currentDistance={currentDistance}
        progress={progress}
        target={target}
      />
      {isStarting ? (
        <RoundButton isStarting={isStarting} onClick={onClickStop}>
          중지
        </RoundButton>
      ) : (
        <RoundButton isStarting={isStarting} onClick={onClickStart}>
          시작
        </RoundButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 1.5rem 0;
  background-color: ${color.bgWhite};
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  text-align: center;
`;
interface RoundButtonProps {
  isStarting: boolean;
}
const RoundButton = styled(Button)<RoundButtonProps>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${color.primary};
  margin: 3.375rem 0 2.5rem;
  font-size: 1.24rem;
  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  ${props =>
    props.isStarting
      ? css`
          background-color: ${color.bgWhite};
          color: ${color.primary};
        `
      : css`
          background-color: ${color.primary};
          color: ${color.bgWhite};
        `}
`;

export {ChallengingCard};
