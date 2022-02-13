export type GetTogehterTrees = {
  challengeId: number;
  challengeName: string;
  numberOfCompletions: number;
  treeId: number;
  numberOfLeaf: number;
}[];

export type CreateProfileReq = {
  userId: number;
  profileImg?: string;
  nickName: string;
  siNm: string;
  sggNm: string;
};

export type CreateProfileRes = {
  profileImg?: string;
  nickName: string;
  siNm: string;
  sggNm: string;
};

export type GetProfileRes = {
  profileImg?: string;
  nickName: string;
  siNm: string;
  sggNm: string;
  token: number;
};
