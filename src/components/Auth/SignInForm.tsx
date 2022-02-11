import styled from 'styled-components';
import color from 'color';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import InfoTxt from 'components/Auth/common/InfoTxt';
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

  const submitHandler = (e: any) => {
    e.preventDefault();
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
        </Wrapper>
        <InfoTxt textAlign>
          아직 네이버스 계정이 없으신가요?
          <SignUp
            onClick={() => {
              history.push('/auth/signup');
            }}>
            회원가입
          </SignUp>
        </InfoTxt>
        <Btn type="submit">로그인</Btn>
      </form>
    </div>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
`;

const SignUp = styled.span`
  font-size: 0.875rem;
  color: ${color.primary};
  cursor: pointer;
`;

const Btn = styled(Button)`
  background-color: ${props => (props.color ? color.line03 : color.primary)};
  color: ${props => props.color || color.bgWhite};
  margin-top: 50px;
`;

export default SignInForm;
