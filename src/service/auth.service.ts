import {IauthApi} from '../apis/types';
import {authApi} from '../apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  api: IauthApi;
  store: typeof AsyncStorage;
  constructor() {
    this.api = authApi;
    this.store = AsyncStorage;
    console.log(this.store);
  }

  async login(data: {email: string; password: string}) {
    // returen await this.api.login(data);
    console.log('auth service login', data);
    this.store.setItem('token', 'token');
    return {
      data: {
        id: 234,
        username: 'chanii',
        token: 'token',
        church: 'church',
      },
    };
  }

  logout() {
    this.store.removeItem('token');
    return this.api.logout();
  }
}

export default new AuthService();
