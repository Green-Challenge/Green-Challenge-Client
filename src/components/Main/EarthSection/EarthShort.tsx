import color from 'color';
import styled from 'styled-components';

interface EarthShortProps {
  amountOfTree: number;
}

function EarthShort({amountOfTree}: EarthShortProps) {
  return (
    <Wrapper>
      <Line>네이버스와 함께</Line>
      <Line>지구에게 선물한 나무</Line>
      <Line>
        <Span>{amountOfTree}그루</Span>
      </Line>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 0.875rem;
  padding: 1rem 1.5rem 0;
  width: 100%;
  text-align: center;
`;

const Line = styled.div``;

const Span = styled.span`
  font-size: 1.5rem;
  color: ${color.primary};
`;

export default EarthShort;
