const Router = require('koa-router');
const router = new Router();
const api = new Router();
const apiController = require('../controllers/api');

router
  .get('/', apiController.getAll)
  .post('/add_site', apiController.addSite);

api.use('/api', router.routes(), router.allowedMethods());

module.exports = api;
