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
}

module.exports = ForgotPassword;
