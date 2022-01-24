import color from 'color';
import styled, {css} from 'styled-components';

interface HeaderProps {
  isBig?: boolean;
  isTitle?: boolean;
}

const Header1 = styled.h1<HeaderProps>`
  ${props =>
    props.isBig
      ? css`
          font-size: 20px;
          font-weight: 700;
        `
      : css`
          font-size: 16px;
          font-weight: 700;
        `}
  color: ${props => (props.isTitle ? color.titleFont : color.bodyFont01)}
`;

export default Header1;
