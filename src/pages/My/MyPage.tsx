import {Layout} from 'components/common';
import Header from 'components/common/Header';
import MyProfileSection from 'components/MyPage/MyProfileSection';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
// import LogoHeader from 'components/common/LogoHeader';
// import styled from 'styled-components';
// import {css} from 'styled-components/macro';

function MyPage() {
  useIsAuthPush();
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle>마이페이지</Header>
      </Layout.Header>
      <Layout.ScrollMain>
        <MyProfileSection />
        <div>ChallengeChart부분</div>
        {/* <ChallengeChart /> */}
      </Layout.ScrollMain>
    </Layout>
  );
}

// const IconStyle = css`
//   cursor: pointer;
// `;

export {MyPage};
