import ChallengeCircle from './ChallengeCircle';
import styled from 'styled-components';
import color from 'color';
import ChallengeInfo from './ChallengeInfo';
import {useHistory} from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

interface ChallengeCardProps {
  challengeId: number;
  percentage: number;
  challengeName: string;
  rewardToken: number;
  numberOfChallengers: number;
  treeId: number;
  isComplete: boolean;
  isParticipating: boolean;
}

function ChallengeCard({
  challengeId,
  percentage,
  challengeName,
  rewardToken,
  numberOfChallengers,
  treeId,
  isComplete,
  isParticipating,
}: ChallengeCardProps) {
  const history = useHistory();
  const onClick = () => {
    if (isParticipating === true) {
      return history.push({
        pathname: '/challenge/challenging',
        state: {challengeId},
      });
    }
    return history.push({pathname: `/challenge/detail/${challengeId}`});
  };

  return (
    <Card onClick={onClick}>
      <ChallengeCircle
        percentage={percentage}
        isComplete={isComplete}
        isParticipating={isParticipating}
        treeId={treeId}
      />
      <Wrapper>
        <ChallengeInfo
          challengeName={challengeName}
          rewardToken={rewardToken}
          numberOfChallengers={numberOfChallengers}
        />
      </Wrapper>
      <ArrowBtn>
        <Icon name="goMore" css={IconStyle} />
      </ArrowBtn>
    </Card>
  );
}
const Card = styled.div`
  float: left;
  box-sizing: border-box;
  margin-bottom: 0.75rem;
  width: 100%;
  padding: 1.5rem;
  height: 8rem;
  background-color: ${color.bgWhite};
  box-shadow: 0.25rem 0.5rem 1.5rem rgba(173, 173, 173, 0.12);
  border-radius: 0.75rem;
  cursor: pointer;
`;
const Wrapper = styled.div`
  float: left;
  margin-left: 1.063rem;
`;
const ArrowBtn = styled.button`
  width: 1rem;
  height: 1rem;
  margin-top: 2.188rem;
  float: right;
  background-color: #fff;
  border: 0;
`;
const IconStyle = css`
  cursor: pointer;
`;
export default ChallengeCard;
