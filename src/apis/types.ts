export interface ICallBehavior {
  get<R>(url: string): Promise<R>;
  post<D, R>(url: string, data: D): Promise<R>;
  put<D, R>(url: string, data: D): Promise<R>;
  delete<D, R>(url: string, data: D): Promise<R>;
}
export interface IAuthRequestForm {
  email: string;
  password: string;
}

export interface IauthApi {
  login(data: IAuthRequestForm): Promise<any>;
  signup(data: IAuthRequestForm): Promise<any>;
  logout(): Promise<any>;
}
