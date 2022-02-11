import color from 'color';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

interface ChallengeInfoProps {
  challengeName: string;
  rewardToken: number;
  numberOfChallengers: number;
}

function ChallengeInfo({
  challengeName,
  rewardToken,
  numberOfChallengers,
}: ChallengeInfoProps) {
  return (
    <Wrapper>
      <Title>{challengeName}</Title>

      <Token>
        <Icon name="token" css={IconStyle} />
        <span>{rewardToken}</span>
      </Token>

      <Participant>
        <Icon name="participant" css={IconStyle} />
        <span>{numberOfChallengers}</span>
      </Participant>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1.875rem;
  line-height: 1.5rem;
`;

const Title = styled.div`
  height: 1.75rem;
  margin-top: -0.75rem;
  color: ${color.bodyFont01};
  font-size: 1rem;
  font-weight: 500;
`;

const Token = styled.div`
  display: flex;
  float: left;
  position: absolute;
  color: ${color.bodyFont02};
  span {
    font-size: 0.75rem;
  }
`;

const IconStyle = css`
  height: 1.375rem;
  margin-right: 0.18rem;
`;

const Participant = styled.div`
  display: flex;
  float: left;
  margin-left: 3.938rem;
  position: absolute;
  color: ${color.bodyFont02};
  span {
    font-size: 0.75rem;
  }
`;

export default ChallengeInfo;
