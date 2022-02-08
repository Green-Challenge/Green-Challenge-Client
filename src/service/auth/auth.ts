import axios from 'axios';
import {
  SignUpParams,
  SignUpResponse,
  SignInParams,
  SignInResponse,
} from './type';

const client = axios.create({baseURL: '/api/auth'});

export const signUp = async (params: SignUpParams) => {
  const {data} = await client.post<SignUpResponse>('signup', params);
  return data;
};

//추가
export const signIn = async (params: SignInParams) => {
  const {data} = await client.post<SignInResponse>('signin', params);
  return data;
};
