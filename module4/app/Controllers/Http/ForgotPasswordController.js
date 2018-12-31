const User = use('App/Models/User');
const crypto = require('crypto');

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email');
      const user = await User.findByOrFail('email', email);

      user.token = crypto.randomBytes(10).toString('hex');
      user.token_created_at = new Date();

      await user.save();
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Essa email existe?' } });
    }

    return response.status(200).send();
  }
}

module.exports = ForgotPasswordController;
