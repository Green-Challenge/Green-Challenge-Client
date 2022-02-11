import styled from 'styled-components';
import color from 'color';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

function MyProfileSection() {
  return (
    <Wrapper>
      <ImgBtn>
        <Icon name="participant" css={IconStyle} />
        {/* <Img src={image} style={{objectFit: 'cover'}} alt="img" /> */}
      </ImgBtn>
      <InfoBox>
        <p css={AddressInfo}>서울시 강남구</p>
        <p css={NickInfo}>닉네임</p>
      </InfoBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${color.bgWhite};
  height: 23.375rem;
  position: relative;
`;

const ImgBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${color.line04};
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border-radius: 100%;
`;

const IconStyle = css`
  cursor: pointer;
  width: 3rem;
  height: 4rem;
`;

const InfoBox = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`;

const AddressInfo = css`
  color: ${color.bodyFont03};
  font-size: 14px;
`;

const NickInfo = css`
  color: ${color.bodyFont01};
  font-size: 20px;
  font-weight: bold;
`;

// const Img = styled.img`
//   width: 10rem;
//   height: 10rem;
//   border-radius: 100%;
//   z-index: 50;
// `;

export default MyProfileSection;
