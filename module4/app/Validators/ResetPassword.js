const Antl = use('Antl');
class ResetPassword {
  get rules() {
    return {
      token: 'required',
      password_confirmation: 'required|confirmed',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = ResetPassword;
