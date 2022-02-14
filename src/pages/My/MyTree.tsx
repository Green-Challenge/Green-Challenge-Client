import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import EarthSection from 'components/Main/EarthSection/EarthSection';
import {TreeSection} from 'components/My/TreeSection';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useTrees from 'hooks/my/useTrees';
import {useAppSelector} from 'hooks/storeHooks';
import {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {css} from 'styled-components/macro';
import NoTree from './NoTree';

interface MyTreeProps {
  imageSrc: string;
}

const NO_TREE_MESSAGE = '참여중인 challenge가 없습니다.';

function MyTree({imageSrc}: MyTreeProps) {
  useIsAuthPush();
  const history = useHistory();
  const {userId} = useAppSelector(state => state.auth.isAuth);
  const amountOfTree = useRef(0);
  const {data, loading, error} = useTrees(userId!);

  const onClick = () => {
    history.push({pathname: '/'});
  };

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error !== null) {
    const {message, status} = error.response!.data;
    if (status === 404 && message === NO_TREE_MESSAGE) {
      return <NoTree />;
    }
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
            <Header
              headerRgihtItems={
                <div onClick={onClick}>
                  <Icon name="close" css={IconStyle} />
                </div>
              }>
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
