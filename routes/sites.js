const Router = require('koa-router');
const router = new Router();
const sites = new Router({prefix: '/api'});
const sitesController = require('../controllers/sites');

router
    .get('/', sitesController.getAll)
    .post('/add', sitesController.addSite);

sites.use('/sites', router.routes(), router.allowedMethods());

module.exports = sites;
