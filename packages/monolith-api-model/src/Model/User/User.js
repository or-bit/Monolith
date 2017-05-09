class User {
  constructor(username, role) {
    this._username = username;
    this._role = role;
  }

  get role() {
    return this._role;
  }

  get username() {
    return this._username;
  }
}

module.exports = User;
