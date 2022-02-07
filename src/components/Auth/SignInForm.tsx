import styled from 'styled-components';
import color from 'color';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import InfoTxt from 'components/Auth/common/InfoTxt';
import axios from 'axios';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'components/common/Button';

function SignInForm() {
  let history = useHistory();

  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const [isActive, setIsActive] = useState(false);
  const isPassedLogin = () => {
    return Email.includes('@') && Password.length > 3
      ? setIsActive(true)
      : setIsActive(false);
  };

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
            onKeyUp={isPassedLogin}
          />
          <InputWithLabel
            label="비밀번호"
            name="password"
            placeholder="비밀번호"
            type="password"
            value={Password}
            onChange={passwordHandler}
            onKeyUp={isPassedLogin}
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
        {isActive ? (
          <Btn
            type="submit"
            onClick={() => {
              history.push('/');
            }}>
            로그인
          </Btn>
        ) : (
          <Btn type="submit" color={color.line01}>
            로그인
          </Btn>
        )}
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
`;

export default SignInForm;
