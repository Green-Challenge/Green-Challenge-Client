import styled from 'styled-components';
import color from 'color';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import InfoTxt from 'components/Auth/common/InfoTxt';
import {useRef, useState} from 'react';
import Button from 'components/common/Button';
import useAuthActions from 'hooks/auth/useAuthAction';
import {SignUpReq} from 'service/auth/type';
import useRegister from 'hooks/auth/useRegister';
import {useHistory} from 'react-router-dom';

function SignUpForm() {
  const isActing = useRef<boolean>(false);
  const history = useHistory();
  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [PasswordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const {signUp} = useAuthActions();
  const {data, loading, error} = useRegister();

  // const isPassedLogin = () => {
  //   return Email.includes('@') && Password.length > 3
  //     ? setIsActive(true)
  //     : setIsActive(false);
  // };

  const isPassedLogin = () => {
    return Password.length > 1 && Password === PasswordCheck && term
      ? setIsActive(true)
      : setIsActive(false);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (Password !== PasswordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    let body: SignUpReq = {
      name: Name,
      email: Email,
      password: Password,
    };

    isActing.current = true;
    signUp(body);
  };

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
    setPasswordError(e.target.value !== Password);
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = (e: any) => {
    //체크박스 초기화
    setTermError(false);
    setTerm(e.target.checked);
  };

  if (data) {
    history.push({pathname: '/auth/profile'});
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
              onKeyUp={isPassedLogin}
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
              onKeyUp={isPassedLogin}
            />
            {PasswordError && <Alert>비밀번호가 일치하지 않습니다.</Alert>}
          </InputWrapper>
          <Info>
            <InfoTxt>
              개인정보 수집 및 이용에 동의합니다
              <input type="checkbox" onChange={onChangeTerm} required />
              {termError && <Alert>약관 동의가 필요합니다.</Alert>}
            </InfoTxt>
          </Info>
        </Wrapper>
        {isActive ? (
          <Btn type="submit">가입</Btn>
        ) : (
          <Btn color={color.line01}>가입</Btn>
        )}
      </form>
    </div>
  );
}

const Wrapper = styled.div`
  margin-left: 1.5rem;
  width: calc(100% - 3rem);
`;

const InputWrapper = styled.div`
  height: 22.5rem;
`;

const Info = styled.div`
  display: flex;
  text-align: center;
`;

const Alert = styled.div`
  color: ${color.red};
  font-size: 0.875rem;
`;

const Btn = styled(Button)`
  background-color: ${props => (props.color ? color.line03 : color.primary)};
  color: ${props => props.color || color.bgWhite};
`;

export default SignUpForm;
