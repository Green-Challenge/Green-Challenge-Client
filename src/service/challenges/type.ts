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

export type ChallengeDetailRes = {
  challengeId: string;
  challengeName: string;
  numberOfChallengers: number;
  rewardToken: number;
  description: string;
  hasTag: string[];
  treeId: string;
  challengeImg: string;
};

export type StartChallengeReq = {
  userId: number;
  challengeId: string;
};
