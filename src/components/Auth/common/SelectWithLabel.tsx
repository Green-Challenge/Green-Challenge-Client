import React from 'react';
import styled from 'styled-components';
import color from 'color';

//타입스크립트 적용하기

interface SelectWithLabelProps {
  label: string;
  [rest: string]: any;
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({label, ...rest}) => (
  <Wrapper>
    <Label>{label}</Label>
    <SelectWrapper>
      <Select {...rest} />
      <Select {...rest} />
    </SelectWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  /* & + & {
    margin-top: 0.8rem;
  } */
  margin-top: 0.6rem;
`;

const Label = styled.label`
  font-family: Noto Sans KR;
  font-style: bold;
  font-size: 14px;
  margin-bottom: 0.3rem;
`;

const Select = styled.select`
  width: calc(100% - 30px);
  font-family: Noto Sans KR;
  border: 0.5px solid ${color.line03};
  outline: none;
  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 14px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const SelectWrapper = styled.div`
  height: 2.5rem;
  gap: 12px;
  display: flex;
`;

export default SelectWithLabel;
