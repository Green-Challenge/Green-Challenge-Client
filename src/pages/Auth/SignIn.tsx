import {Layout} from 'components/common';
import Header from 'components/common/Header';
import styled from 'styled-components';
import SignInForm from 'components/Auth/SignInForm';

function SignIn() {
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle>로그인</Header>
      </Layout.Header>
      <Main>
        <SignInForm />
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

export {SignIn};
