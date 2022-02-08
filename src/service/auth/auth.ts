import apiClient from 'service/apiClient';
import {SignUpReq, SignUpRes} from './type';

const baseEndPoint = '/api/auth';

export class AuthService {
  public static me = async () => {
    try {
      const {data} = await apiClient.get(`${baseEndPoint}/me`);
      return data;
    } catch (err) {
      throw err;
    }
  };

  public static signUp = async (req: SignUpReq) => {
    try {
      const {data} = await apiClient.post<SignUpRes>(`${baseEndPoint}`, req);
      return data;
    } catch (err) {
      throw err;
    }
  };
}
