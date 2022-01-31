import {EarthImage} from './EarthImage';
import EarthShort from './EarthShort';
import styled from 'styled-components';

interface EarthSectionProps {
  imageSrc: string;
}

function EarthSection({imageSrc}: EarthSectionProps) {
  return (
    <Div>
      <EarthImage imageSrc={imageSrc} />
      <EarthShort amountOfTree={35}></EarthShort>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 35px;
`;
export default EarthSection;
