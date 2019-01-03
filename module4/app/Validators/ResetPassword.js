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
}

module.exports = ResetPassword;
