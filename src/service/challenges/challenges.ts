import apiClient from 'service/apiClient';
import {ErrorType, ThunkApi} from 'service/apiUtilsType';
import {ChallengeDetailRes, ChallengesRes, StartChallengeReq} from './type';

const baseEndPoint = '/api/challenge';

export class ChallengeService {
  public static getChallenges = async (
    userId: string,
    {rejectWithValue}: ThunkApi,
  ) => {
    try {
      const {data} = await apiClient.get<ChallengesRes>(
        `${baseEndPoint}/list/${userId}`,
      );
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data as ErrorType);
    }
  };

  public static getChallengeDetail = async (
    challengeId: string,
    {rejectWithValue}: ThunkApi,
  ) => {
    try {
      const {data} = await apiClient.get<ChallengeDetailRes>(
        `${baseEndPoint}/${challengeId}`,
      );

      data.challengeId = challengeId;
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data as ErrorType);
    }
  };

  public static startChallenge = async (req: StartChallengeReq) => {
    try {
      await apiClient.post<{}>(`${baseEndPoint}`, req);
    } catch (err: any) {
      throw err;
    }
  };
}
