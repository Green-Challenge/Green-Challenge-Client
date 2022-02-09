import React from 'react';
import InputWithLabel from '../common/InputWithLabel';

function NickName() {
  return (
    <>
      <div className="form-nickname">
        <InputWithLabel label="닉네임" name="nickname" placeholder="닉네임" />
      </div>
    </>
  );
}

export default NickName;
