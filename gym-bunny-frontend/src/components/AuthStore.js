let instance = null;

class AuthStore {
  constructor() {
    this._token = null;
  }

  isLoggedIn() {
    return this._token !== null;
    // if i have a login and I have a token
  }

  get token() {
    return this._token;
  }

  setToken(token) {
    this._token = token;
  }

  logout() {
    this._token = null;
  }
}

function getAuthInstance() {
  if (!instance) {
    instance = new AuthStore();
  }
  return instance;
}

export default getAuthInstance;
