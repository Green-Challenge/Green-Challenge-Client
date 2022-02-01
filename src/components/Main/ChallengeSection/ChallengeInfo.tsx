import color from 'color';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

function ChallengeInfo() {
  return (
    <Wrapper>
      <ChallengeName>뚜벅이 출퇴근</ChallengeName>
      <ChallengeDesc>
        <Token>
          <Icon name="coin" css={IconStyle} />
          30,000
        </Token>
        <Span>
          <Icon name="participant" css={IconStyle} /> 80
        </Span>
      </ChallengeDesc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* float: left; */
  /* display: inline-block; */
  margin-top: 30px;
  line-height: 1.5rem;
  width: 100%;
  text-align: center;
`;

const ChallengeName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 7px;
`;

const ChallengeDesc = styled.div`
  font-size: 12px;
  //Q. margin-bottom이나 padding-bottom 적용해도 안 변하는 이유는?
`;

const Span = styled.span`
  line-height: 0.75rem;
  color: ${color.bodyFont02};
`;

const Token = styled.span`
  line-height: 0.75rem;
  color: ${color.bodyFont02};
  margin-right: 12px;
`;

const IconStyle = css`
  cursor: pointer;
`;

export default ChallengeInfo;
