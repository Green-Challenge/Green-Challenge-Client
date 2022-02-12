import color from 'color';
import styled from 'styled-components';

interface CurrentProps {
  position: number;
  children: React.ReactNode;
}
function Current({position, children}: CurrentProps) {
  return (
    <Wrapper position={position}>
      {children}
      <Triangle />
    </Wrapper>
  );
}
const Wrapper = styled.div<CurrentProps>`
  position: absolute;
  left: ${props => `${props.position}%`};
  transform: translate(-50%, -100%);
  top: -0.625rem;
  min-width: 2.75rem;
  height: 1.375rem;
  background-color: ${color.primary};
  color: ${color.bgWhite};
  font-weight: 500;
  font-size: 0.75rem;
  text-align: center;
  border-radius: 0.75rem;
  &::after {
    content: '';
    display: inline-block;
    height: 0.938rem;
  }
`;
const Triangle = styled.div`
  position: absolute;
  width: 0rem;
  height: 0rem;
  bottom: 0rem;
  left: 50%;
  transform: translate(-50%, 100%);
  border-top: 0.5rem solid ${color.primary};
  border-left: 0.25rem solid transparent;
  border-right: 0.25rem solid transparent;
`;

export default Current;
