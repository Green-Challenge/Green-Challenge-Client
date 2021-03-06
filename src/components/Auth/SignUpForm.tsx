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
  const [check, setCheck] = useState(false);
  const [checkError, setCheckError] = useState(false);

  const {signUp} = useAuthActions();
  const {data, loading, error} = useRegister();

  const isPassedLogin =
    Email.includes('@') && Password === PasswordCheck && Password.length > 2;

  const getIsActive = isPassedLogin && check === true;

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (Password !== PasswordCheck) {
      return setPasswordError(true);
    }

    if (!check) {
      return setCheckError(true);
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

  const isCheckClicked = () => {
    setCheck(!check);
  };

  if (data) {
    history.push({pathname: '/auth/profile'});
  }

  if (!data && loading) {
    return <div>?????????</div>;
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
              label="??????"
              name="name"
              placeholder="??????"
              value={Name}
              onChange={nameHandler}
            />
            <InputWithLabel
              label="?????????"
              name="email"
              placeholder="?????????"
              value={Email}
              onChange={emailHandler}
            />
            <InputWithLabel
              label="????????????"
              name="password"
              placeholder="????????????"
              type="password"
              value={Password}
              onChange={passwordHandler}
            />
            <InputWithLabel
              label="???????????? ??????"
              name="password"
              placeholder="???????????? ??????"
              type="password"
              value={PasswordCheck}
              onChange={passwordCheckHandler}
            />
            {PasswordError && <Alert>??????????????? ???????????? ????????????.</Alert>}
          </InputWrapper>
          <Info>
            <InfoTxt>
              <Label htmlFor="label-a">
                ???????????? ?????? ??? ????????? ???????????????
              </Label>
              <InputCheck type="checkbox" onClick={isCheckClicked} />
              {checkError && <Alert>?????? ????????? ???????????????.</Alert>}
            </InfoTxt>
          </Info>
        </Wrapper>
        {getIsActive ? (
          <Btn type="submit">??????</Btn>
        ) : (
          <Btn color={color.line01}>??????</Btn>
        )}
      </form>
    </div>
  );
}

const Label = styled.label`
  top: 0.188rem;
  position: relative;
`;

const InputCheck = styled.input`
  top: 0.281rem;
  position: relative;
`;

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
  margin-top: -0.31rem;
`;

const Alert = styled.div`
  color: ${color.red};
  font-size: 0.875rem;
`;

const Btn = styled(Button)`
  background-color: ${props => (props.color ? color.line03 : color.primary)};
  color: ${props => props.color || color.bgWhite};
  bottom: 0;
  position: fixed;
  /* :hover {
    background-color: ${color.line03};
  } */
`;

export default SignUpForm;
