import styled from 'styled-components';
import color from 'color';

function MyProfileSection() {
  return (
    <Wrapper>
      <h1>MyProfileSection</h1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  background-color: ${color.bgWhite};
  height: 23.375rem;
  position: relative;
`;

export default MyProfileSection;
