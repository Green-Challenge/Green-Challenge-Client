import React from 'react';
import styled from 'styled-components';
import color from 'color';

const InputWithLabel = ({label, ...rest}) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...rest} />
  </Wrapper>
);

const Wrapper = styled.div`
  & + & {
    margin-top: 0.8rem;
  }
  /* margin-left: 12px; */
`;

const Label = styled.div`
  font-family: Noto Sans KR;
  font-style: bold;
  font-size: 14px;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  font-family: Noto Sans KR;
  width: calc(100% - 30px);
  border: 0.5px solid ${color.line03};
  outline: none;
  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 14px;
  padding-left: 0.5rem;
  padding-right: 0.5rem; */
`;

export default InputWithLabel;
