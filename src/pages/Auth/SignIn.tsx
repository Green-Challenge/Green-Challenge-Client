import {Layout} from 'components/common';
import Header from 'components/common/Header';
import SignInForm from 'components/Auth/SignInForm';
import {useIsAuthMain} from 'hooks/auth/useIsAuth';
import styled from 'styled-components';

function SignIn() {
  useIsAuthMain();
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
