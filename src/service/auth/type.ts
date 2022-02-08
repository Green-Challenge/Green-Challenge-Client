export type SignUpParams = {
  name: string;
  userName: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  token: string;
  username: string;
};

//추가 중..?
export type SignInParams = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
  username: string;
};
