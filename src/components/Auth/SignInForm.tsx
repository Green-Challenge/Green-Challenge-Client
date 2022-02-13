import styled from 'styled-components';
import color from 'color';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'components/common/Button';
import {SignInReq} from 'service/auth/type';
import useAuthActions from 'hooks/auth/useAuthAction';
import useUser from 'hooks/auth/useUser';

function SignInForm() {
  const isActing = useRef<boolean>(false);
  const history = useHistory();
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const {signIn} = useAuthActions();
  const {data, loading, error} = useUser();

  const isPassedLogin = Email.includes('@') && Password.length > 2;

  const getIsActive = isPassedLogin;

  const submitHandler = (e: any) => {
    e.preventDefault();
    // state에 저장한 값 가져오기
    isActing.current = true;
    let body: SignInReq = {
      email: Email,
      password: Password,
    };

    signIn(body);
  };

  const emailHandler = (e: any) => {
    SetEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    SetPassword(e.target.value);
  };

  if (data) {
    history.push({pathname: '/'});
  }

  if (!data && loading) {
    return <div>로딩중</div>;
  }

  if (error && isActing.current) {
    alert(error.message);
    isActing.current = false;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Wrapper>
          <InputWrapper>
            <InputWithLabel
              label="이메일"
              name="email"
              placeholder="이메일"
              value={Email}
              onChange={emailHandler}
            />
            <InputWithLabel
              label="비밀번호"
              name="password"
              placeholder="비밀번호"
              type="password"
              value={Password}
              onChange={passwordHandler}
            />
          </InputWrapper>
          <Info>
            아직 네이버스 계정이 없으신가요?
            <SignUp
              onClick={() => {
                history.push('/auth/signup');
              }}>
              <SignUpWrapper>회원가입</SignUpWrapper>
            </SignUp>
          </Info>
        </Wrapper>
        {getIsActive ? (
          <Btn type="submit">로그인</Btn>
        ) : (
          <Btn color={color.line01}>로그인</Btn>
        )}
      </form>
    </div>
  );
}

const Info = styled.div`
  bottom: 6.875rem;
  display: flex;
  text-align: center;
  color: ${color.bodyFont03};
  margin-left: 1.5rem;
  font-size: 0.875rem;
  position: fixed;
  z-index: 10;
`;

const Wrapper = styled.div`
  margin: 0 1.5rem;
`;

const InputWrapper = styled.div`
  /* height: 23rem; */
  height: 1rem;
`;

const SignUp = styled.span`
  font-size: 0.875rem;
  color: ${color.primary};
  cursor: pointer;
`;

const Btn = styled(Button)`
  background-color: ${props => (props.color ? color.line03 : color.primary)};
  color: ${props => props.color || color.bgWhite};
  bottom: 0;
  position: fixed;
`;
const SignUpWrapper = styled.span`
  margin-left: 0.5rem;
  font-weight: bold;
  border-bottom: 0.031rem solid ${color.primary};
`;

export default SignInForm;
