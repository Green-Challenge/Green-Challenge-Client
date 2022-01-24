import color from 'color';
import styled from 'styled-components';

const Button1 = styled.button`
  width: calc(100% - 48px);
  height: 56px;
  background-color: ${color.primary};
  color: ${color.bgWhite};
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export default Button1;
