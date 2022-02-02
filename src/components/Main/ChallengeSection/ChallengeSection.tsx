import Section from 'components/common/Section';
import ChallengeCard from './ChallengeCard';

function ChallengeSection() {
  return (
    <Section title="챌린지 참여">
      <ChallengeCard percentage={80} />
      <ChallengeCard percentage={80} />
    </Section>
  );
}

export {ChallengeSection};
