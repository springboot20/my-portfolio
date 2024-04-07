import axios from 'axios';
import { LocalStorage } from '../utils';

export const chatAppApiClient = axios.create({
  baseURL: 'http://localhost:4500/api/v1',
  timeout: 12000,
});

chatAppApiClient.interceptors.response.use(
  (config) => {
    const token = LocalStorage.get('token');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const register = (data: { username: string; password: string; email: string }) =>
  chatAppApiClient.post('/auth/users/register', data);

export const login = (data: { email: string; password: string }) =>
  chatAppApiClient.post('/auth/users/login', data);

export const logOut = () => chatAppApiClient.post('/auth/users/logout');
