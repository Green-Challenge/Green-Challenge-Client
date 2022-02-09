import apiClient from 'service/apiClient';
import {ErrorType, ThunkApi} from 'service/apiUtilsType';
import {MeRes, SignInReq, SignInRes, SignUpReq, SignUpRes} from './type';

const baseEndPoint = '/api/auth';

export class AuthService {
  public static me = async () => {
    try {
      const {data} = await apiClient.get<MeRes>(`${baseEndPoint}/me`);
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
      const {data} = await apiClient.post<SignInRes>(
        `${baseEndPoint}/signin`,
        req,
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data as ErrorType);
    }
  };
}
