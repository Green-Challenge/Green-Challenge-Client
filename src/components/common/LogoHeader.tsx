import {css} from 'styled-components/macro';
import Header, {wrapperStyle} from './Header';

interface LogoHeaderProps {
  logo: React.ReactNode;
  headerRightItems?: React.ReactNode;
}
function LogoHeader({headerRightItems, logo}: LogoHeaderProps) {
  return (
    <div css={wrapperStyle}>
      <div css={leftStyle}>{logo}</div>
      <Header.Right>{headerRightItems}</Header.Right>
    </div>
  );
}

const leftStyle = css`
  width: 90%;
  display: flex;
`;

export default LogoHeader;
