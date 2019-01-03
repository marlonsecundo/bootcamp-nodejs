class Session {
  get rules() {
    return {
      email: 'required|email',
      password: 'required',
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = Session;
