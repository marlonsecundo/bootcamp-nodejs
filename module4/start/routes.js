const Route = use('Route');

// User
Route.post('users', 'UserController.store');

// Session
Route.post('sessions', 'SessionController.store');

// ForgotPassword
Route.post('passwords', 'ForgotPasswordController.store');

// File
Route.get('/files/:id', 'FileController.show');

// Auth
Route.group(() => {
  Route.post('/files', 'FileController.store');

  // Project
  Route.resource('projects', 'ProjectController').apiOnly();

  // Task
  Route.resource('projects.tasks', 'TaskController').apiOnly();
}).middleware(['auth']);
