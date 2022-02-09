import React from 'react';
import Address from './Address';
import NickName from './NickName';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Button from 'components/common/Button';
import {useState} from 'react';

function ProfileSection() {
  // useEffect(() => {
  //   console.log('profile' + sample);
  // }, [sample]);

  const submit = (e: any) => {
    e.preventDefault();
    //axios.post
    console.log();
  };

  const [chosenSi, setChosenSi] = useState('');
  const [chosenGu, setChosenGu] = useState('');
  const [image, setImage] = useState('');

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <ProfileImage image={image} setImage={setImage} />
        <NickName />
        <Address
          chosenSi={chosenSi}
          setChosenSi={setChosenSi}
          chosenGu={chosenGu}
          setChosenGu={setChosenGu}
        />
        <Button type="submit">확인</Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
`;

export default ProfileSection;
