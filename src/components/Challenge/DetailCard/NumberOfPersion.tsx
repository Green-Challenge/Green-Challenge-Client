import color from 'color';
import styled from 'styled-components';

interface NumberOfPersionProps {}

const NumberOfPersion = styled.div<NumberOfPersionProps>`
  position: absolute;
  right: 16px;
  top: 16px;
  min-width: 47px;
  height: 22px;
  background-color: #dcdcdc;
  border-radius: 16px;
  display: flex;
  justify-content: flex-end;
  padding: 4px 10px;
  align-items: center;
  color: ${color.bodyFont01};
  font-weight: 400;
  font-size: 14px;
`;
export default NumberOfPersion;
