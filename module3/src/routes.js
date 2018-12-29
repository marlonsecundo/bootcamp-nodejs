const express = require('express');
const validate = require('express-validation');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');

const {
  UserController,
  SessionController,
  AdController,
  PurchaseController,
} = require('./app/controllers');
const validators = require('./app/validators');

routes.post('/users', validate(validators.User), UserController.store);
routes.post('/sessions', validate(validators.Session), SessionController.store);

routes.use(authMiddleware);

// Ads
routes.get('/ads', AdController.index);
routes.get('/ads/:id', AdController.show);
routes.post('/ads', validate(validators.Ad), AdController.store);
routes.put('/ads/:id', validate(validators.Ad), AdController.update);
routes.get('/ads/:id', AdController.destroy);

// Purchase
routes.post('/purchases', validate(validators.Purchase), PurchaseController.store);

module.exports = routes;
