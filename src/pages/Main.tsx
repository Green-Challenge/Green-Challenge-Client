import {Layout} from 'components/common';
import LogoHeader from 'components/common/LogoHeader';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';
import styled from 'styled-components';
import CircleContainer from 'components/Main/Tree/CircleContainer';

function Main() {
  return (
    <Layout>
      <Layout.Header>
        <LogoHeader
          logo={<Icon name="logo" css={IconStyle} />}
          headerRightItems={<Icon name="my" css={IconStyle} />}
        />
      </Layout.Header>
      <CircleContainer />
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

export default Main;
