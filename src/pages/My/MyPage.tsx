import {Layout} from 'components/common';
import Header from 'components/common/Header';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';
import MyProfileSection from 'components/MyPage/MyProfileSection';
import {useHistory} from 'react-router-dom';

function MyPage() {
  useIsAuthPush();
  const history = useHistory();
  const onClick = () => {
    history.push({pathname: '/'});
  };
  return (
    <Layout>
      <Layout.Header>
        <Header
          isTitle
          headerRgihtItems={
            <div onClick={onClick}>
              <Icon name="close" css={IconStyle} />
            </div>
          }>
          마이페이지
        </Header>
      </Layout.Header>
      <Layout.ScrollMain>
        <MyProfileSection />
        <div>ChallengeChart부분</div>
      </Layout.ScrollMain>
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

export {MyPage};
