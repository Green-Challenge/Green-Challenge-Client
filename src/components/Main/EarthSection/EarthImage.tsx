import styled from 'styled-components';

interface EarthImageProps {
  imageSrc: string;
}

function EarthImage({imageSrc}: EarthImageProps) {
  return (
    <ImageWrapper>
      <Img src={imageSrc} alt="지구 이미지" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  margin-top: 4.798rem;
  margin-bottom: 0.86rem;
  text-align: center;
`;

const Img = styled.img`
  width: 10.318rem;
  height: 10.318rem;
`;

export {EarthImage};
