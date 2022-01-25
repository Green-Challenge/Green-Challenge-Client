import color from 'color';
import Description from 'components/Auth/OnBoard/Description';
import Headline from 'components/Auth/OnBoard/Headline';
import OnBoardImage from 'components/Auth/OnBoard/OnBoardImage';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import styled from 'styled-components';
import Button from 'components/common/Button';

function OnBoard() {
  return (
    <Layout>
      <OnBoardImage />
      <Headline />
      <Description />
      <BtnBox>
        <Btn>로그인</Btn>
        <Btn>회원가입</Btn>
      </BtnBox>
    </Layout>
  );
}

const BtnBox = styled.div`
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

const SignInBtn = styled.button`
  color: ${color.bgWhite};
`;
export {OnBoard};
