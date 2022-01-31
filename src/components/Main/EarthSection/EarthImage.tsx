import styled from 'styled-components';
import color from 'color';

interface EarthImageProps {
  imageSrc: string;
}

function EarthImage({imageSrc}: EarthImageProps) {
  return (
    <ImageWrapper>
      <img src={imageSrc} alt="지구img" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 10.318rem;
  height: 10.318rem;
  background-color: ${color.primary};
  margin: 4.798rem 6.25rem 0.86rem;
  border-radius: 100%;
`;

export {EarthImage};
