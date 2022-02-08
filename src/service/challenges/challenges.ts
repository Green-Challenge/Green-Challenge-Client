import apiClient from 'service/apiClient';
import {ChallengeDetailRes, ChallengesRes} from './type';

const baseEndPoint = '/api/challenge';

// const thunkApi = {
// 	fulfillWithValue(value, meta) =>
// }

export class ChallengeService {
  public static getChallenges = async (userId: string) => {
    try {
      const {data} = await apiClient.get<ChallengesRes>(
        `${baseEndPoint}/list/${userId}`,
      );
      return data;
    } catch (err) {
      throw err;
    }
  };

  public static getChallengeDetail = async (challengeId: string) => {
    try {
      const {data} = await apiClient.get<ChallengeDetailRes>(
        `${baseEndPoint}/${challengeId}`,
      );

      data.challengeId = challengeId;
      return data;
    } catch (err) {
      throw err;
    }
  };
}
