import React from 'react';
import styled from 'styled-components';
import color from 'color';

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
  margin-top: 0.6rem;
`;

const Label = styled.label`
  margin-bottom: 0.3rem;
  font-style: bold;
  font-size: 0.875rem;
`;

const Select = styled.select`
  width: calc(100% - 1.875rem);
  outline: none;
  line-height: 2.5rem;
  border: 0.031rem solid ${color.line03};
  border-radius: 0.625rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.875rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  height: 2.5rem;
  gap: 0.75rem;
`;

export default SelectWithLabel;
