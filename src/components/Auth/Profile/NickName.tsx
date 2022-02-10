import React from 'react';
import InputWithLabel from '../common/InputWithLabel';

interface NickNameProps {
  nickName: string;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
}
function NickName({nickName, setNickName}: NickNameProps) {
  const nickNameHandler = (e: any) => {
    setNickName(e.target.value);
  };

  return (
    <>
      <InputWithLabel
        label="닉네임"
        name="nickname"
        value={nickName}
        placeholder="닉네임"
        onChange={nickNameHandler}
      />
    </>
  );
}

export default NickName;
