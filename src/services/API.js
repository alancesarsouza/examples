import axios from 'axios';
import { API_HOST } from '../config/endpoints';

const API = (
  config = {},
) => {
  const axiosConfig = {
    method: config.method || 'GET',
    baseURL: config.baseURL || API_HOST,
    headers: config.headers || {},
    ...config,
  };

  return axios(axiosConfig);
};

export default API;
