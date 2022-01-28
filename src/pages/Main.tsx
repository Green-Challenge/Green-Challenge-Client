import {Layout} from 'components/common';
import LogoHeader from 'components/common/LogoHeader';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

function Main() {
  return (
    <Layout>
      <Layout.Header>
        <LogoHeader
          logo={<Icon name="logo" css={IconStyle} />}
          headerRightItems={<Icon name="my" css={IconStyle} />}
        />
      </Layout.Header>
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

export default Main;
