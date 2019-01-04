/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/antl/providers/AntlProvider',
];

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
*/
const aceProviders = ['@adonisjs/lucid/providers/MigrationsProvider'];

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
*/
const aliases = {};

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [];

module.exports = {
  providers,
  aceProviders,
  aliases,
  commands,
};
