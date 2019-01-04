const Antl = use('Antl');
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

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Session;
