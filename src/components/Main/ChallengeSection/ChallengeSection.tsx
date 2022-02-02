import Section from 'components/common/Section';
import ChallengeCard from './ChallengeCard';
function ChallengeSection() {
  return (
    <Section title="챌린지 참여">
      <ChallengeCard
        percentage={50}
        challengeName="뚜벅이 챌린지1"
        rewardToken={30000}
        numberOfChallengers={80}
        isComplete={false}
      />
      <ChallengeCard
        percentage={100}
        challengeName="뚜벅이 챌린지2"
        rewardToken={30000}
        numberOfChallengers={80}
        isComplete={true}
      />
    </Section>
  );
}
export {ChallengeSection};
