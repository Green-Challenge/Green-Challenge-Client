import styled from 'styled-components';
import color from 'color';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import InfoTxt from 'components/Auth/common/InfoTxt';
import axios from 'axios';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'components/common/Button';

//로그인 가입 버튼 활성화 기능 추가하기
function SignInForm() {
  let history = useHistory();

  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();
    // state에 저장한 값 가져오기
    console.log(Email);
    console.log(Password);
    history.push('/auth/signin');

    let body = {
      email: Email,
      password: Password,
    };

    axios.post('/api/auth/signin', body).then(res => console.log(res));
  };

  const emailHandler = (e: any) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    e.preventDefault();
    SetPassword(e.target.value);
  };

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
            {' '}
            회원가입
          </SignUp>
        </InfoTxt>
        <Button type="submit">로그인</Button>
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

export default SignInForm;
