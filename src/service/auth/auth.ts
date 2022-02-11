import apiClient from 'service/apiClient';
import {ErrorType, ThunkApi} from 'service/apiUtilsType';
import {MeRes, SignInReq, SignInRes, SignUpReq, SignUpRes} from './type';

const baseEndPoint = '/api/auth';

export class AuthService {
  public static getToekn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return '';
  };
  public static me = async () => {
    const token = this.getToekn();
    const headers = {
      'X-AUTH-TOKEN': token,
    };
    try {
      const {data} = await apiClient.get<MeRes>(`${baseEndPoint}/me`, {
        headers,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };

  public static signUp = async (
    req: SignUpReq,
    {rejectWithValue}: ThunkApi,
  ) => {
    try {
      const {data} = await apiClient.post<SignUpRes>(`${baseEndPoint}`, req);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data as ErrorType);
    }
  };

  public static signIn = async (
    req: SignInReq,
    {rejectWithValue}: ThunkApi,
  ) => {
    try {
      const response = await apiClient.post<SignInRes>(
        `${baseEndPoint}/signin`,
        req,
      );
      const {data, headers} = response;
      localStorage.setItem('token', headers['x-auth-token']);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data as ErrorType);
    }
  };
}
