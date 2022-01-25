import React from 'react';
import color from 'color';
import OnBoardImage from './OnBoardImage';
import styled from 'styled-components';
import Headline from './Headline';
import Description from './Description';
import Button from 'components/common/Button';

function OnBoardCard() {
  return (
    <div>
      <OnBoardImage />
      <Headline />
      <Description />
      <BtnBox>
        <Btn>로그인</Btn>
        <Btn>회원가입</Btn>
      </BtnBox>
    </div>
  );
}

const BtnBox = styled.div`
  /* float: left; */
  display: flex;
  width: calc(100% - 24px);
  margin: 0px 24px;
`;

const Btn = styled.button`
  width: 150px;
  height: 56px;
  background-color: ${color.primary};
  color: ${color.bgWhite};
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 12px;
  border-radius: 10px;
`;

export default OnBoardCard;
