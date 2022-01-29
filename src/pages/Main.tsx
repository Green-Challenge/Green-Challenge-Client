import {Layout} from 'components/common';
import LogoHeader from 'components/common/LogoHeader';
import Icon from 'components/Icon/Icon';
import CircleChart from 'components/Main/Tree/CircleChart';
import {css} from 'styled-components/macro';
import styled from 'styled-components';
import NormalTree from 'components/Main/Tree/NormalTree';
import StatusTree from 'components/Main/Tree/StatusTree';
import CompleteTree from 'components/Main/Tree/CompleteTree';

function Main() {
  return (
    <Layout>
      <Layout.Header>
        <LogoHeader
          logo={<Icon name="logo" css={IconStyle} />}
          headerRightItems={<Icon name="my" css={IconStyle} />}
        />
      </Layout.Header>

      <ChallengeCard>
        <NormalTree />
        <StatusTree />
        <CompleteTree />
      </ChallengeCard>
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

const ChallengeCard = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  position: fixed;
  margin-top: 458px;
  margin-left: 24px;
  text-align: center;
`;

export default Main;
