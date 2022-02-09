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
  challengeId: number;
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

export type GetChallengingReq = {
  challengeId: number;
  userId: number;
};

export type GetChallengingRes = {
  current: number;
  goalDistance: number;
  leafCount: number;
};
