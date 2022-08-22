import Apis from './Apis';
import {IAuthRequestForm, ICallBehavior, IauthApi} from './types';

class Auth extends Apis implements IauthApi {
  constructor(CallBehavior: ICallBehavior) {
    super(CallBehavior);
  }
  async login(data: {email: string; password: string}) {
    return await this.CallBehavior.post<IAuthRequestForm, any>(
      '/auth/login',
      data,
    );
  }

  async logout() {}

  async signup(data: IAuthRequestForm): Promise<any> {
    return await this.CallBehavior.post<IAuthRequestForm, any>(
      '/auth/signup',
      data,
    );
  }
}

export default Auth;
