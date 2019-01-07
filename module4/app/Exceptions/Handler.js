const BaseExceptionHandler = use('BaseExceptionHandler');
const Env = use('Env');
const Youch = use('Youch');
const Raven = require('raven');

const Config = use('Config');

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { request, response }) {
    if (error.name === 'ValidatonException') {
      return response.status(error.status).send(error.messages);
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request);
      const errorJSON = await youch.toJSON();

      return response.status(error.status).send(errorJSON);
    }

    return response.status(error.status);
  }

  async report(error, { request }) {
    Raven.config(Config.get('services.sentry.dsn'));
    Raven.captureException(error);
  }
}

module.exports = ExceptionHandler;
