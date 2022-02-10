import React, {useState} from 'react';
import ProfileImage from './ProfileImage';
import NickName from './NickName';
import Address from './Address';
import styled from 'styled-components';
import Button from 'components/common/Button';

function ProfileSection() {
  const submit = (e: any) => {
    e.preventDefault();
  };

  const [chosenSi, setChosenSi] = useState('');
  const [chosenGu, setChosenGu] = useState('');
  const [image, setImage] = useState('');
  const [nickName, setNickName] = useState('');

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <ProfileImage image={image} setImage={setImage} />
        <NickName nickName={nickName} setNickName={setNickName} />
        <Address
          chosenSi={chosenSi}
          setChosenSi={setChosenSi}
          chosenGu={chosenGu}
          setChosenGu={setChosenGu}
        />
        <Btn type="submit">확인</Btn>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
`;

const Btn = styled(Button)`
  width: 100%;
  margin: 40px auto;
`;
export default ProfileSection;
