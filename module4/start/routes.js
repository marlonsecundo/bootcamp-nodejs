const Route = use('Route');

// User
Route.post('users', 'UserController.store');

// Session
Route.post('sessions', 'SessionController.store');

// ForgotPassword
Route.post('passwords', 'ForgotPasswordController.store');

// File
Route.post('/files', 'FileController.store');
