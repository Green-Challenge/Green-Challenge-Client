import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import EarthSection from 'components/Main/EarthSection/EarthSection';
import {TreeSection, TreeType} from 'components/My/TreeSection';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import {css} from 'styled-components/macro';

const trees: TreeType[] = [
  {
    challengeId: 0,
    challengeName: '뚜벅이 출퇴근',
    numberOfCompletions: 5,
    numberOfLeaf: 2,
    treeId: 0,
  },
  {
    challengeId: 1,
    challengeName: '자전거 출퇴근',
    numberOfCompletions: 5,
    numberOfLeaf: 2,
    treeId: 0,
  },
  {
    challengeId: 2,
    challengeName: '버스 출퇴근',
    numberOfCompletions: 5,
    numberOfLeaf: 2,
    treeId: 0,
  },
];

interface MyTreeProps {
  imageSrc: string;
}

function MyTree({imageSrc}: MyTreeProps) {
  useIsAuthPush();
  return (
    <Layout>
      <Layout.Header>
        <Header headerRgihtItems={<Icon name="close" css={IconStyle} />}>
          함께 심은 나무
        </Header>
      </Layout.Header>
      <Layout.ScrollMain>
        <EarthSection imageSrc={imageSrc} />
        <TreeSection trees={trees} />
      </Layout.ScrollMain>
    </Layout>
  );
}

const IconStyle = css`
  width: 24px;
  cursor: pointer;
`;

export {MyTree};
