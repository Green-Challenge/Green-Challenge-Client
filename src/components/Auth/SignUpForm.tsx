import styled from 'styled-components';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import InfoTxt from 'components/Auth/common/InfoTxt';
import axios from 'axios';
import {useState} from 'react';
import Button from 'components/common/Button';

function SignUpForm() {
  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [PasswordCheck, SetPasswordCheck] = useState('');

  const nameHandler = (e: any) => {
    e.preventDefault();
    SetName(e.target.value);
  };

  const emailHandler = (e: any) => {
    e.preventDefault();
    SetEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    e.preventDefault();
    SetPassword(e.target.value);
  };

  const passwordCheckHandler = (e: any) => {
    e.preventDefault();
    SetPasswordCheck(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    // state에 저장한 값 가져오기
    console.log(Email);
    console.log(Password);

    let body = {
      name: Name,
      email: Email,
      password: Password,
    };

    axios.post('/api/auth', body).then(res => console.log(res));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Wrapper>
          <InputWrapper>
            <InputWithLabel
              label="이름"
              name="name"
              placeholder="이름"
              value={Name}
              onChange={nameHandler}
            />
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
            <InputWithLabel
              label="비밀번호 확인"
              name="password"
              placeholder="비밀번호 확인"
              type="password"
              value={PasswordCheck}
              onChange={passwordCheckHandler}
            />
          </InputWrapper>
          <Info>
            <InfoTxt>
              개인정보 수집 및 이용에 동의합니다
              <input type="checkbox" />
            </InfoTxt>
          </Info>
        </Wrapper>
        <Button type="submit">가입</Button>
      </form>
    </div>
  );
}

const Wrapper = styled.div`
  margin-left: 24px;
  width: calc(100% - 48px);
`;

const InputWrapper = styled.div`
  height: 367px;
`;

const Info = styled.div`
  display: flex;
  text-align: center;
`;

export default SignUpForm;
