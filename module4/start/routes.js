const Route = use('Route');

// User
Route.post('users', 'UserController.store');

// Session
Route.post('sessions', 'SessionController.store');

// ForgotPassword
Route.post('passwords', 'ForgotPasswordController.store');

// File
Route.get('/files/:id', 'FileController.show');

Route.group(() => {
  Route.post('/files', 'FileController.store');
  Route.resource('projects', 'ProjectController').apiOnly();
}).middleware(['auth']);
