import color from 'color';
import styled from 'styled-components';

const Button = styled.button`
  width: calc(100% - 3rem);
  height: 3.5rem;
  background-color: ${color.primary};
  color: ${color.bgWhite};
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin: 2.5rem 1.5rem;
  border-radius: 0.625rem;
  :hover {
    background-color: ${props => (props.color ? color.line03 : color.mint01)};
  }
  /* transition: box-shadow 0.3s; */
  /* :hover {
    box-shadow: 0 0 0.688rem rgba(33, 33, 33, 0.2);
  } */
`;

export default Button;
