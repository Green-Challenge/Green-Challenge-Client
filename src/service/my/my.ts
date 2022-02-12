import apiClient from 'service/apiClient';
import {GetTogehterTrees} from './type';

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
}
