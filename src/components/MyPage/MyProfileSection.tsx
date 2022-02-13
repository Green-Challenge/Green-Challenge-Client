import styled from 'styled-components';
import color from 'color';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';
import useProfile from 'hooks/my/useProfile';

interface MyProfileSectionProps {
  userId: number;
}

function MyProfileSection({userId}: MyProfileSectionProps) {
  console.log(userId);

  const {data, loading, error} = useProfile(userId);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  return (
    <>
      {data && (
        <Wrapper>
          <ImgBtn>
            <Icon name="participant" css={IconStyle} />
            {/* <Img src={image} style={{objectFit: 'cover'}} alt="img" /> */}
          </ImgBtn>
          <InfoBox>
            <p css={AddressInfo}>
              {data.siNm} {data.sggNm}
            </p>
            <p css={NickInfo}>{data.nickName}</p>
          </InfoBox>
          <TokenBox>
            <Token>
              <Icon name="token" css={TokenStyle} />
              <span>{data.token}</span>
            </Token>
          </TokenBox>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.section`
  padding-top: 1.25rem;
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
  margin-bottom: 1.5rem;
  text-align: center;
`;

const AddressInfo = css`
  color: ${color.bodyFont03};
  font-size: 0.875rem;
`;

const NickInfo = css`
  color: ${color.bodyFont01};
  font-size: 1.25rem;
  font-weight: bold;
`;

const TokenBox = styled.div`
  width: 5.5rem;
  height: 2.25rem;
  background-color: ${color.line04};
  border-radius: 0.75rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 0.37rem;
`;

const Token = styled.div`
  text-align: center;
  display: flex;
  color: ${color.bodyFont01};
  span {
    font-size: 0.85rem;
  }
  margin-left: 0.7rem;
`;

const TokenStyle = css`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.375rem;
`;

// const Img = styled.img`
//   width: 10rem;
//   height: 10rem;
//   border-radius: 100%;
//   z-index: 50;
// `;

export default MyProfileSection;
