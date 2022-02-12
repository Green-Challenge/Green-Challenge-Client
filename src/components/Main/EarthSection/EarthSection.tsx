import {EarthImage} from './EarthImage';
import EarthShort from './EarthShort';
import styled from 'styled-components';

interface EarthSectionProps {
  amountOfTree: number;
}

function EarthSection({amountOfTree}: EarthSectionProps) {
  return (
    <Div>
      <EarthImage imageSrc="/Icon/earth.svg" />
      <EarthShort amountOfTree={amountOfTree}></EarthShort>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 2.188rem;
`;
export default EarthSection;
