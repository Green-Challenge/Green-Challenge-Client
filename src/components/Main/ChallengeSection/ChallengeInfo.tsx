import color from 'color';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

// interface ChallengeInfoProps {
//   ChallengeName: string;
// }

function ChallengeInfo() {
  return (
    <Wrapper>
      <ChallengeTitle>뚜벅이 챌린지</ChallengeTitle>
      <ChallengeDesc>
        <Token>
          <Icon name="coin" css={IconStyle} />
          30,000
        </Token>
        <Participant>
          <Icon name="participant" css={IconStyle} /> 80
        </Participant>
      </ChallengeDesc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1.875rem;
  line-height: 1.5rem;
  width: 100%;
  text-align: center;
`;

const ChallengeTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.438rem;
`;

const ChallengeDesc = styled.div`
  font-size: 0.75rem;
  //Q. margin-bottom이나 padding-bottom 적용해도 안 변하는 이유는?
`;

const Participant = styled.span`
  line-height: 0.75rem;
  color: ${color.bodyFont02};
`;

const Token = styled.span`
  line-height: 0.75rem;
  color: ${color.bodyFont02};
  margin-right: 0.75rem;
`;

const IconStyle = css`
  cursor: pointer;
`;

export default ChallengeInfo;
