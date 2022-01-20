import axios from 'axios';
import {SignUpParams, SignUpResponse} from './type';

const client = axios.create({baseURL: '/api/auth'});

export const signUp = async (params: SignUpParams) => {
  const {data} = await client.post<SignUpResponse>('signup', params);
  return data;
};
