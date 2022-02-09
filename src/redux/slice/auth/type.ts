export interface User {
  userId: number;
  name: string;
  username?: string;
  token?: number;
  url?: string;
}

export type IsAuthType = {
  isAuth: boolean;
  userId: number | null;
};
