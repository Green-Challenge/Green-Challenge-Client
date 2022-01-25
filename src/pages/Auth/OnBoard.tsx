import OnBoardCard from 'components/Auth/OnBoard/OnBoardCard';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import styled from 'styled-components';

function OnBoard() {
  return (
    <Layout>
      <Layout.Header>
        <Header>온보딩 그래픽</Header>
      </Layout.Header>
      <Main>
        <OnBoardCard />
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

export {OnBoard};
