import {EarthImage} from './EarthImage';
import EarthShort from './EarthShort';
import styled from 'styled-components';

interface EarthSectionProps {
  imageSrc: string;
}

function EarthSection({imageSrc}: EarthSectionProps) {
  return (
    <Div>
      <EarthImage imageSrc="/Icon/earth.svg" />
      <EarthShort amountOfTree={35}></EarthShort>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 35px;
`;
export default EarthSection;
