import {Layout} from 'components/common';
import styled from 'styled-components';
import Header from 'components/common/Header';
import SignUpForm from 'components/Auth/SignUpForm';
import {useIsAuthMain} from 'hooks/auth/useIsAuth';

function SignUp() {
  useIsAuthMain();
  return (
    <Layout>
      <Layout.Header>
        <Header>회원가입</Header>
      </Layout.Header>
      <Main>
        <SignUpForm />
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

export {SignUp};
