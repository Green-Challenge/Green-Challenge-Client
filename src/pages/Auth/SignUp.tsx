import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import styled from 'styled-components';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import InfoTxt from 'components/Auth/common/InfoTxt';
import {useHistory} from 'react-router-dom';

function SignUp() {
  let history = useHistory();

  return (
    <Layout>
      <Layout.Header>
        <Header>회원가입</Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <InputWrapper>
            <InputWithLabel label="이름" name="name" placeholder="이름" />
            <InputWithLabel label="이메일" name="email" placeholder="이메일" />
            <InputWithLabel
              label="비밀번호"
              name="password"
              placeholder="비밀번호"
              type="password"
            />
            <InputWithLabel
              label="비밀번호 확인"
              name="password"
              placeholder="비밀번호 확인"
              type="password"
            />
          </InputWrapper>
          <Info>
            <InfoTxt>
              개인정보 수집 및 이용에 동의합니다
              <input type="checkbox" />
            </InfoTxt>
          </Info>
        </Wrapper>
        <Button
          onClick={() => {
            history.push('/auth/profile');
          }}>
          가입
        </Button>
      </Main>
    </Layout>
  );
}
const Wrapper = styled.div`
  margin-left: 24px;
  width: calc(100% - 48px);
`;

const InputWrapper = styled.div`
  height: 367px;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  text-align: center;
`;

export {SignUp};
