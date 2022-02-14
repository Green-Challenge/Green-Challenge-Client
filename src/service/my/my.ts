import apiClient from 'service/apiClient';
import {GetChartRes} from 'service/challenges/type';
import {
  CreateProfileReq,
  CreateProfileRes,
  GetProfileRes,
  GetTogehterTrees,
} from './type';

const baseEndPoint = '/api/my';

export class MyService {
  public static getTogehterTrees = async (userId: number) => {
    try {
      const {data} = await apiClient.get<GetTogehterTrees>(
        `${baseEndPoint}/trees/${userId}`,
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  public static createProfile = async (req: CreateProfileReq) => {
    try {
      const {data} = await apiClient.post<CreateProfileRes>(
        `${baseEndPoint}/profile`,
        req,
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  public static getProfile = async (userId: number) => {
    try {
      const {data} = await apiClient.get<GetProfileRes>(`
			${baseEndPoint}/profile/${userId}`);
      return data;
    } catch (error) {
      throw error;
    }
  };

  public static getChart = async (userId: number) => {
    try {
      const {data} = await apiClient.get<GetChartRes>(
        `${baseEndPoint}/chart/${userId}`,
      );
      return data;
    } catch (error) {
      throw error;
    }
  };
}
