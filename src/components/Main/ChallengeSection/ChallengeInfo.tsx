import color from 'color';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

function ChallengeInfo() {
  return (
    <Wrapper>
      <Line>뚜벅이출퇴근</Line>
      <Line>
        <Token>
          <Icon name="coin" css={IconStyle} /> 30,000
        </Token>
        <Span>
          <Icon name="participant" css={IconStyle} /> 80
        </Span>
      </Line>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.5rem;
  width: 100%;
  text-align: center;
`;

const Line = styled.div``;

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
