import Section from 'components/common/Section';
import ChallengeCard from './ChallengeCard';
import Challenges from './Challenges';

function ChallengeSection() {
  return (
    <Section title="챌린지 참여">
      {Challenges.map(challenge => {
        return (
          <ChallengeCard
            percentage={challenge.percentage}
            challengeName={challenge.ChallengeName}
            rewardToken={challenge.rewardToken}
            numberOfChallengers={challenge.numberOfChallengers}
            isComplete={challenge.isComplete}
            isParticipating={challenge.isParticipating}
            treeId={challenge.treeId}
            key={challenge.treeId}
          />
        );
      })}
    </Section>
  );
}
export {ChallengeSection};
