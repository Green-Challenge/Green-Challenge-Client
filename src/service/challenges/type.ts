export type ChallengeType = {
  challengeId: number;
  challengeName: string;
  treeId: number;
  percent: number;
  rewordToken: number;
  numberOfChallengers: number;
  compelete: boolean;
  participating: boolean;
};

export type ChallengesRes = ChallengeType[];

export type ChallengeDetailRes = {
  challengeId: number;
  challengeName: string;
  numberOfChallengers: number;
  rewardToken: number;
  description: string;
  hashTag: string[];
  treeId: number;
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

export type GetTreeGrowthByChallengeId = {
  treeId: number;
  treeGrowth: number;
  numberOfLeaf: number;
};

export type GetChartReq = {
  challengeId: number;
  userId: number;
};

export type GetChartRes = {
  lastMonth: {x: string; y: number}[];
  currentMonth: {x: string; y: number}[];
};

export type AddChallengeRecordReq = {
  challengeId: number;
  userId: number;
  achieved: number;
};

export type GetTreeRes = {
  treeName: string;
};

export type GetShortRes = {
  dayOfChallenge: number;
  amountOfTree: number;
};
