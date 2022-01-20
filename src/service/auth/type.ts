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
