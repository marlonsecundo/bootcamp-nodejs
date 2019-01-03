class User {
  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = User;
