import styled from 'styled-components';
import NumberOfPersion from './NumberOfPersion';

interface ChallengeImageProps {
  imageSrc: string;
  numberOfPersion: number;
}

function ChallengeImage({imageSrc, numberOfPersion}: ChallengeImageProps) {
  return (
    <ImageWrapper>
      <NumberOfPersion>{numberOfPersion}명</NumberOfPersion>
      <img src={imageSrc} alt="챌린지 이미지" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  img {
    display: block;
  }
`;

export default ChallengeImage;
