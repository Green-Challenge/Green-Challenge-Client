export type SignUpReq = {
  name: string;
  email: string;
  password: string;
};

export type SignUpRes = {
  userId: number;
  name: string;
};
