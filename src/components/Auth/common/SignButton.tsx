import color from 'color';
import styled from 'styled-components';

const SignButton = styled.button`
  width: 150px;
  height: 56px;
  background-color: ${color.primary}
  color:${color.bgWhite};
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 40px 24px;
  border-radius: 10px;
`;

export default SignButton;
