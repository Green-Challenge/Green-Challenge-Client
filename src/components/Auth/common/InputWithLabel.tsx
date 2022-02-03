import React from 'react';
import styled from 'styled-components';
import color from 'color';

interface InputWithLabelProps {
  label: string;
  [rest: string]: any;
}
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
  margin-bottom: 0.42rem;
  font-style: bold;
  font-size: 0.875rem;
`;

const Input = styled.input`
  width: calc(100% - 17px);
  outline: none;
  line-height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 0.031rem solid ${color.line03};
  border-radius: 10px;
  font-size: 0.875rem;
`;

export default InputWithLabel;
