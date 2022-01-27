import React from 'react';
import styled from 'styled-components';
import color from 'color';

interface InputWithLabelProps {
  label: string;
  [rest: string]: any;
}
//타입스크립트 적용하기
const InputWithLabel: React.FC<InputWithLabelProps> = ({label, ...rest}) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...rest} />
  </Wrapper>
);

const Wrapper = styled.div`
  & + & {
    margin-top: 1.14rem;
  }
`;

const Label = styled.label`
  font-family: Noto Sans KR;
  font-style: bold;
  font-size: 14px;
  margin-bottom: 0.42rem;
`;

const Input = styled.input`
  font-family: Noto Sans KR;
  width: calc(100% - 17px);
  /* width: 100%; */
  border: 0.5px solid ${color.line03};
  outline: none;
  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 14px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export default InputWithLabel;
