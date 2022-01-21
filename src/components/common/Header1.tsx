import color from 'color';
import styled, {css} from 'styled-components';

interface HeaderProps {
  title: string;
  isBig?: boolean;
  isTitle?: boolean;
}

function Header1({isBig, title, isTitle}: HeaderProps) {
  return (
    <Wrapper isTitle={isTitle} isBig={isBig}>
      {title}
    </Wrapper>
  );
}

interface WrapperProps {
  isBig?: boolean;
  isTitle?: boolean;
}
const Wrapper = styled.header<WrapperProps>`
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
