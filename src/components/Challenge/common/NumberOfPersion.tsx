import color from 'color';
import styled from 'styled-components';

interface NumberOfPersionProps {}

const NumberOfPersion = styled.div<NumberOfPersionProps>`
  position: absolute;
  right: 1rem;
  top: 1rem;
  min-width: 2.938rem;
  height: 1.375rem;
  background-color: #dcdcdc;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0.625rem;
  align-items: center;
  color: ${color.bodyFont01};
  font-weight: 400;
  font-size: 0.875rem;
`;
export {NumberOfPersion};
