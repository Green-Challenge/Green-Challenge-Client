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
  top: -10px;
  min-width: 44px;
  height: 22px;
  background-color: ${color.primary};
  color: ${color.bgWhite};
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  border-radius: 12px;
  &::after {
    content: '';
    display: inline-block;
    height: 15px;
  }
`;
const Triangle = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 100%);
  border-top: 8px solid ${color.primary};
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
`;

export default Current;
