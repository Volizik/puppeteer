const Router = require('koa-router');
const router = new Router();
const api = new Router();
const apiController = require('../controllers/api');

router.get('/', apiController.getAll);

api.use('/api/', router.routes(), router.allowedMethods());

module.exports = api;
