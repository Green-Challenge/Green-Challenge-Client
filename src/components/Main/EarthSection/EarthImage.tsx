import styled from 'styled-components';

interface EarthImageProps {
  imageSrc: string;
}

function EarthImage({imageSrc}: EarthImageProps) {
  return (
    <Wrapper>
      <img src={imageSrc} alt="지구" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 1.75rem;
`;

export {EarthImage};
