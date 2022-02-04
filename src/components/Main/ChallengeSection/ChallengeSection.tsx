import Section from 'components/common/Section';
import useChallenges from 'hooks/challenge/useChallenges';
import ChallengeCard from './ChallengeCard';

interface ChallengeSectionProps {
  userId: string;
}

function ChallengeSection({userId}: ChallengeSectionProps) {
  const {data, error, loading} = useChallenges(userId);
  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>에러</div>;
  }
  return (
    <Section title="챌린지 참여">
      {data &&
        data.map(challenge => {
          return (
            <ChallengeCard
              challengeId={challenge.challengeId}
              percentage={challenge.percent}
              challengeName={challenge.challengeName}
              rewardToken={challenge.rewardToken}
              numberOfChallengers={challenge.numberOfChallengers}
              isComplete={challenge.isCompelete}
              isParticipating={challenge.isParticipating}
              treeId={challenge.treeId}
              key={challenge.challengeId}
            />
          );
        })}
    </Section>
  );
}
export {ChallengeSection};
