import styled from 'styled-components';
import color from 'color';

const InfoTxt = styled.div<{textAlign?: boolean}>`
  float: left;
  width: 100%;
  height: 1.5rem;
  color: ${color.bodyFont03};
  font-size: 0.875rem;
  text-align: ${props => (props.textAlign ? 'center' : 'start')};
`;

export default InfoTxt;
