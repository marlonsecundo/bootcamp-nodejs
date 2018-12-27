const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');

const {
  UserController,
  SessionController,
  AdController,
  PurchaseController,
} = require('./app/controllers');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Ads
routes.get('/ads', AdController.index);
routes.get('/ads/:id', AdController.show);
routes.post('/ads', AdController.store);
routes.put('/ads/:id', AdController.update);
routes.get('/ads/:id', AdController.destroy);

// Purchase
routes.post('/purchases', PurchaseController.store);

module.exports = routes;
