import ChallengeCircle from './ChallengeCircle';
import styled from 'styled-components';
import color from 'color';
import ChallengeInfo from './ChallengeInfo';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

function ChallengeCard() {
  return (
    <Card>
      {/* <Wrapper> */}

      <ChallengeCircle />

      <ChallengeInfo />

      <Icon name="arrow" css={IconStyle} />

      {/* </Wrapper> */}
    </Card>
  );
}

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  height: 8rem;
  background-color: ${color.bgWhite};
  box-shadow: 0.25rem 0.5rem 1.5rem rgba(173, 173, 173, 0.12);
  border-radius: 0.75rem;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const IconStyle = css`
  cursor: pointer;
`;

export default ChallengeCard;
