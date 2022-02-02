import Section from 'components/common/Section';
import ChallengeCard from './ChallengeCard';
function ChallengeSection() {
  return (
    <Section title="챌린지 참여">
      <ChallengeCard
        percentage={50}
        challengeName="뚜벅이 챌린지"
        rewardToken={30000}
        numberOfChallengers={80}
        isComplete={false}
        isParticipating
        treeId={0}
      />
      <ChallengeCard
        percentage={100}
        challengeName="자전거 출퇴근"
        rewardToken={10000}
        numberOfChallengers={75}
        isComplete
        isParticipating
        treeId={1}
      />
    </Section>
  );
}
export {ChallengeSection};
