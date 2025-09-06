import { globalVar } from '@/constants/env';
import axios, { AxiosRequestConfig } from 'axios';

export class NetworkLib {
  static create = (config?: AxiosRequestConfig) => {
    return axios.create({
      ...config,
      baseURL: globalVar.MOCK_API_URL,
      adapter: 'fetch',
    });
  };
}
