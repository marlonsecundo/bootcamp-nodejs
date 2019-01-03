const Route = use('Route');

// User
Route.post('users', 'UserController.store').validator('User');

// Session
Route.post('sessions', 'SessionController.store');

// ForgotPassword
Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword');
Route.get('passwords', 'ForgotPasswordController.update').validator('ResetPassword');

// File
Route.get('/files/:id', 'FileController.show');

// Auth
Route.group(() => {
  Route.post('/files', 'FileController.store');

  // Project
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]));

  // Task
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Task']]]));
}).middleware(['auth']);
