export type SignUpReq = {
  name: string;
  email: string;
  password: string;
};

export type SignUpRes = {
  userId: number;
  name: string;
};

export type SignInReq = {
  email: string;
  password: string;
};

export type SignInRes = {
  userId: number;
};

export type MeRes = {
  userId: number;
};
