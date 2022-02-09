import apiClient from 'service/apiClient';
import {ErrorType, ThunkApi} from 'service/apiUtilsType';
import {
  ChallengeDetailRes,
  ChallengesRes,
  GetChallengingReq,
  GetChallengingRes,
  GetTreeGrowthByChallengeId,
  StartChallengeReq,
} from './type';

const baseEndPoint = '/api/challenge';

export class ChallengeService {
  public static getChallenges = async (
    userId: number,
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
    challengeId: number,
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

  public static getChallenging = async (req: GetChallengingReq) => {
    try {
      const {data} = await apiClient.post<GetChallengingRes>(
        `${baseEndPoint}/challenging/detail`,
        req,
      );
      return data;
    } catch (err: any) {
      throw err;
    }
  };

  public static getTreeGrowthByChallengeId = async (challengeId: number) => {
    try {
      const {data} = await apiClient.get<GetTreeGrowthByChallengeId>(
        `${baseEndPoint}/tree/${challengeId}`,
      );
      return data;
    } catch (error) {
      throw error;
    }
  };
}
