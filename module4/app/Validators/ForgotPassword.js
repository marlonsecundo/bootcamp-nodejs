const Antl = use('Antl');
class ForgotPassword {
  get rules() {
    return {
      email: 'required|email',
      redirect_url: 'required|url',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = ForgotPassword;
