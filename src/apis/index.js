import Auth from './auth';
import User from './user';
import axios from 'axios';
import {API_BASE_URL, API_DEFAULT_TIMEOUT, API_PROXY_PORT} from './constants';

const REQUIRED_TOKEN_API_LIST = ['/user/*'];

export default class Apis {
  constructor() {
    this._axios = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_DEFAULT_TIMEOUT,
      proxy: {
        port: API_PROXY_PORT,
      },
    });
    this._axios.interceptors.request.use(config => {
      const requiredToken = REQUIRED_TOKEN_API_LIST.some(pattern =>
        config.url.match(pattern),
      );
      if (requiredToken) {
        config.headers.Authorization = `Bearer ${'token'}`;
      }
      return config;
    });
    this._auth = new Auth({axios: this._axios});
    this._user = new User({axios: this._axios});
  }

  // get accessToken() {
  //   return JSON.parse(wiondow.localStorage.getItem('auth')).token;
  // }
}
