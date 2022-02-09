import React from 'react';
import Address from './Address';
import NickName from './NickName';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Button from 'components/common/Button';
import {useState} from 'react';

//interface ProfileSectionProps 정의하기

function ProfileSection() {
  const [siName, setSiName] = useState('');
  console.log(siName);
  console.log(setSiName);

  // useEffect(() => {
  //   console.log('profile' + sample);
  // }, [sample]);

  return (
    <Wrapper>
      <form>
        <ProfileImage />
        <NickName />
        <Address />
        <Button>확인</Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
`;

export default ProfileSection;
