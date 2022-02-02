import Section from 'components/common/Section';
import ChallengeCard from './ChallengeCard';

function ChallengeSection() {
  return (
    <Section title="챌린지 참여">
      <ChallengeCard progress={25} />
      <ChallengeCard progress={50} />
      <ChallengeCard progress={100} />
    </Section>
  );
}

export {ChallengeSection};
