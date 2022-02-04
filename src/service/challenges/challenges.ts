import apiClient from 'service/apiClient';
import {ChallengesRes} from './type';

const baseEndPoint = '/api/challenge';

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
}
