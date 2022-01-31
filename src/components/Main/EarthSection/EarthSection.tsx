import {EarthImage} from './EarthImage';
import EarthShort from './EarthShort';

interface EarthSectionProps {
  imageSrc: string;
}

function EarthSection({imageSrc}: EarthSectionProps) {
  return (
    <div>
      <EarthImage imageSrc={imageSrc} />
      <EarthShort amountOfTree={35}></EarthShort>
    </div>
  );
}

export default EarthSection;
