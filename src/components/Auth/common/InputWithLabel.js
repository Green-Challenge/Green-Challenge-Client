import React from 'react';
import styled from 'styled-components';
import color from 'color';

const InputWithLabel = ({label, ...rest}) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...rest} />
  </Wrapper>
);

// 두개가 함께 있는 경우 상단(그 사이)에 여백 주기
const Wrapper = styled.div`
  & + & {
    margin-top: 0.8rem;
  }
`;

const Label = styled.div`
  /* font-family: Noto Sans KR; */
  font-style: bold;
  font-size: 14px;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  font-family: Noto Sans KR;
  width: 100%;
  border: 0.5px solid ${color.line03};
  outline: none;
  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 14px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export default InputWithLabel;
