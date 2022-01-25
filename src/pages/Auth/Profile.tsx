import React, {useState} from 'react';
import Button from 'components/common/Button';
import color from 'color';
import styled from 'styled-components';
import ProfileContent from 'components/Auth/Profile/ProfileContent';
import ProfileImage from 'components/Auth/Profile/ProfileImage';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
// interface ProfileProps {
//   Login: any;
//   error: any;
// }

function Profile() {
  return (
    <Layout>
      <Layout.Header>
        <Header>프로필</Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <ProfileImage />
          <ProfileContent />
        </Wrapper>
        <Button>확인</Button>
      </Main>
    </Layout>
    //   <form>
    //     <h2>프로필</h2>

    //     <ProfileImage />
    //
    //     <Button type="submit">확인</Button>
    //   </form>
    // </Wrapper>
  );
}

// const Wrapper = styled.div`
//   position: fixed;
//   bottom: 0;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 360px;
//   background-color: white;
// `;

const Wrapper = styled.div`
  margin: auto 24px;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;
export {Profile};
