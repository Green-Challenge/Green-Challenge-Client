import color from 'color';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import Current from './Current';

interface ProgressProps {
  progress: number;
  target: number;
  currentDistance: number;
}

function Progress({progress, target, currentDistance}: ProgressProps) {
  return (
    <Wrapper>
      <Current position={progress}>{currentDistance}km</Current>
      <LeafContainer>
        <Leaf name="leaf" />
      </LeafContainer>
      <Background>
        <Percent progress={progress}></Percent>
      </Background>
      <TargetSpan>{target}km</TargetSpan>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2.75rem;
  position: relative;
`;
const Background = styled.div`
  width: 100%;
  height: 0.75rem;
  background-color: #ebedf0;
  border-radius: 0.625rem;
`;
interface PercentProps {
  progress: number;
}
const Percent = styled.div<PercentProps>`
  height: 100%;
  width: ${props => `${props.progress}%`};
  background-color: ${color.primary};
  border-radius: 0.625rem;
`;
const Leaf = styled(Icon)`
  width: 1.25rem;
  height: 1.25rem;
`;
const LeafContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-100%);
`;
const TargetSpan = styled.span`
  position: absolute;
  right: 0;
  transform: translateY(100%);
  font-weight: 400;
  font-size: 0.75rem;
  bottom: -0.25rem;
  color: ${color.line01};
`;

export default Progress;
