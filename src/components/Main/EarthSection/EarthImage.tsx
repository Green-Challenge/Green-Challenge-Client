import styled from 'styled-components';

interface EarthImageProps {
  imageSrc: string;
}

function EarthImage({imageSrc}: EarthImageProps) {
  return (
    <ImageWrapper>
      <img src={imageSrc} alt="Earth" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  margin-top: 4.798rem;
  text-align: center;
`;

export {EarthImage};
