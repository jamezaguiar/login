const Router = require('express').Router;

const routes = new Router();

const SessionContoller = require('./app/controllers/SessionController');

routes.post('/sessions', SessionContoller.store);

module.exports = routes;
