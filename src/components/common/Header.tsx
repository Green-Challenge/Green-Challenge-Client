import color from 'color';
import {css} from 'styled-components/macro';
import styled from 'styled-components';

interface HeaderProps {
  isBig?: boolean;
  isTitle?: boolean;
  headerLeftItems?: React.ReactNode;
  headerRgihtItems?: React.ReactNode;
  children?: React.ReactNode;
}

function Header({
  isBig,
  isTitle,
  headerLeftItems,
  headerRgihtItems,
  children,
}: HeaderProps) {
  return (
    <div css={wrapperStyle}>
      <Header.Left>{headerLeftItems}</Header.Left>
      <HeaderStyled isBig={isBig} isTitle={isTitle}>
        {children}
      </HeaderStyled>
      <Header.Right>{headerRgihtItems}</Header.Right>
    </div>
  );
}

export const wrapperStyle = css`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 21px;
`;

Header.Left = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
Header.Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
`;
const HeaderStyled = styled.h1<HeaderProps>`
  text-align: center;
  width: 60%;
  ${props =>
    props.isBig
      ? css`
          font-size: 20px;
          font-weight: 700;
        `
      : css`
          font-size: 16px;
          font-weight: 500;
        `}
  color: ${props => (props.isTitle ? color.titleFont : color.bodyFont01)}
`;

export default Header;
