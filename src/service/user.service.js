// user who logged in can use this service
class UserService {
  constructor({apis}) {
    this._apis = apis;
  }
  get apis() {
    return this._apis;
  }

  fetchSomething(payload) {
    return this.apis.auth.login(payload);
  }
}

export default UserService;
