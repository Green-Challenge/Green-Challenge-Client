import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import EarthSection from 'components/Main/EarthSection/EarthSection';
import {TreeSection} from 'components/My/TreeSection';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useTrees from 'hooks/my/useTrees';
import {useAppSelector} from 'hooks/storeHooks';
import {useRef} from 'react';
import {css} from 'styled-components/macro';

interface MyTreeProps {
  imageSrc: string;
}

function MyTree({imageSrc}: MyTreeProps) {
  useIsAuthPush();
  const {userId} = useAppSelector(state => state.auth.isAuth);
  const amountOfTree = useRef(0);
  const {data, loading, error} = useTrees(userId!);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  if (data) {
    const treeCount = data.reduce(
      (prev, cur) => prev + cur.numberOfCompletions,
      0,
    );
    amountOfTree.current = treeCount;
  }

  return (
    <>
      {data && (
        <Layout>
          <Layout.Header>
            <Header headerRgihtItems={<Icon name="close" css={IconStyle} />}>
              함께 심은 나무
            </Header>
          </Layout.Header>
          <Layout.ScrollMain>
            <EarthSection amountOfTree={amountOfTree.current} />
            <TreeSection trees={data} />
          </Layout.ScrollMain>
        </Layout>
      )}
    </>
  );
}

const IconStyle = css`
  width: 1.5rem;
  cursor: pointer;
`;

export {MyTree};
