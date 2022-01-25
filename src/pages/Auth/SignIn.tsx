import color from 'color';
import InfoTxt from 'components/Auth/common/InfoTxt';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import styled from 'styled-components';

function SignIn() {
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle>로그인</Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <InputWithLabel label="이메일" name="email" placeholder="이메일" />
          <InputWithLabel
            label="비밀번호"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          <InfoTxt>
            아직 네이버스 계정이 없으신가요?<SignUp> 회원가입</SignUp>
          </InfoTxt>
        </Wrapper>
        <Button>로그인</Button>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  margin: auto 24px;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

const SignUp = styled.span`
  font-size: 14px;
  color: ${color.primary};
`;

export {SignIn};
