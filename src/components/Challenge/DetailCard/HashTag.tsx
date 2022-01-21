import color from 'color';
import styled from 'styled-components';

const HashTag = styled.span`
  ::before {
    content: '#';
  }
  background-color: ${color.line03};
  display: inline-block;
  border-radius: 16px;
  padding: 2px 8px;
  color: ${color.bodyFont02};
  font-size: 14px;
  font-weight: 400;
`;

export default HashTag;
