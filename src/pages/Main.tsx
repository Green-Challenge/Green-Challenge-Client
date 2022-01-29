import {Layout} from 'components/common';
import LogoHeader from 'components/common/LogoHeader';
import Icon from 'components/Icon/Icon';
import CircleChart from 'components/Main/Tree/CircleChart';
import {css} from 'styled-components/macro';
import styled from 'styled-components';

function Main() {
  return (
    <Layout>
      <Layout.Header>
        <LogoHeader
          logo={<Icon name="logo" css={IconStyle} />}
          headerRightItems={<Icon name="my" css={IconStyle} />}
        />
      </Layout.Header>
      <Wrapper>
        <CircleChart />
      </Wrapper>
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: fixed;
  margin-top: 250px;
  margin-left: 130px;
  text-align: center;
`;

export default Main;
