import styled from 'styled-components';

interface EarthImageProps {
  imageSrc: string;
}

function EarthImage({imageSrc}: EarthImageProps) {
  return (
    <ImageWrapper>
      <Img src={imageSrc} alt="Earth" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  margin-top: 4.798rem;
  text-align: center;
`;

const Img = styled.img`
  width: 10.318rem;
  height: 10.318rem;
`;

export {EarthImage};
