const Router = require('express').Router;

const routes = new Router();

routes.get('/login', (req, res) => {
  return res.json({ message: 'Hello, world!' });
});

module.exports = routes;
