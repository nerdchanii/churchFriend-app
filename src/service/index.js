import AuthService from './auth.service';
import UserService from './user.service';

class Service {
  constructor({apis}) {
    this._authService = new AuthService({apis});
    this._userService = new UserService({apis});
  }

  get authService() {
    return this.authService;
  }
  get userService() {
    return this.userService;
  }
}

export default Service;
