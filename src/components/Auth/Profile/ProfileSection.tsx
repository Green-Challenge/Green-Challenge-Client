import React, {useState} from 'react';
import ProfileImage from './ProfileImage';
import NickName from './NickName';
import Address from './Address';
import styled from 'styled-components';
import Button from 'components/common/Button';
import {useHistory} from 'react-router-dom';

function ProfileSection() {
  const history = useHistory();
  const submit = (e: any) => {
    e.preventDefault();
  };
  const [chosenSi, setChosenSi] = useState('');
  const [chosenGu, setChosenGu] = useState('');
  const [image, setImage] = useState('');
  const [nickName, setNickName] = useState('');

  return (
    <>
      <form onSubmit={submit}>
        <Wrapper>
          <ProfileImage image={image} setImage={setImage} />
          <NickName nickName={nickName} setNickName={setNickName} />
          <Address
            chosenSi={chosenSi}
            setChosenSi={setChosenSi}
            chosenGu={chosenGu}
            setChosenGu={setChosenGu}
          />
        </Wrapper>
        <Btn
          onClick={() => {
            history.push('/auth/signin');
          }}
          type="submit">
          확인
        </Btn>
      </form>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 2.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
const Btn = styled(Button)`
  position: fixed;
  bottom: 0;
  margin-top: 3.125rem;
`;

export default ProfileSection;
