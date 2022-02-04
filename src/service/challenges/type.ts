export type ChallengeType = {
  challengeId: number;
  challengeName: string;
  treeId: number;
  percent: number;
  rewardToken: number;
  numberOfChallengers: number;
  isCompelete: boolean;
  isParticipating: boolean;
};

export type ChallengesRes = ChallengeType[];
