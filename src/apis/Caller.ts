import {AsyncLocalStorage} from 'async_hooks';
import axios, {Axios, AxiosResponse} from 'axios';
import {
  API_DEFAULT_TIMEOUT,
  API_PROXY_PORT,
  API_PROXY_HOST,
  REQUIRED_TOKEN_API_LIST,
} from './constants';
import {ICallBehavior} from './types';

class Caller implements ICallBehavior {
  caller: Axios;
  token: string | undefined;
  constructor(BASE_URL: string, token?: string) {
    this.token = token;
    this.caller = axios.create({
      baseURL: BASE_URL,
      timeout: API_DEFAULT_TIMEOUT,
      proxy: {
        host: API_PROXY_HOST,
        port: API_PROXY_PORT,
      },
    });
    this.caller.interceptors.request.use(this.requestInterceptor.bind(this));
    this.caller.interceptors.response.use(this.responseInterceptor.bind(this));
  }

  get(): Promise<any> {
    return this.get();
  }
  post(): Promise<any> {
    return this.post();
  }
  put(): Promise<any> {
    return this.put();
  }
  delete(): Promise<any> {
    return this.delete();
  }

  private getToken(): string {
    if (this.token) return this.token;
    return '';
  }

  private setToken(token: string): void {
    this.token = token;
  }

  private requestInterceptor(config: any): any {
    const requiredToken = REQUIRED_TOKEN_API_LIST.some(
      pattern => config.url && config.url.match(pattern),
    );
    if (requiredToken && config.headers) {
      config.headers.Authorization = `Bearer ${this.getToken()}`;
    }
    return config;
  }

  private responseInterceptor(response: AxiosResponse): AxiosResponse {
    if (response.data?.token) {
      this.setToken(response.data.token);
    }
    return response;
  }
}

export default Caller;
