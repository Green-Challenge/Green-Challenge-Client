import axios from 'axios';
import {config} from 'config';

const apiClient = (baseURL: string, token?: string) => {
  return axios.create({
    baseURL,
    withCredentials: true,
  });
};

const apiClientInstance = apiClient(config.SERVER!);
apiClientInstance.defaults.withCredentials = true;

export default apiClientInstance;
