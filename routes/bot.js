const Router = require('koa-router');
const router = new Router();
const bot = new Router({prefix: '/api'});
const botController = require('../controllers/bot');

router
    .post('/start', botController.startBot)
    .post('/stop', botController.stopBot);

bot.use('/bot', router.routes(), router.allowedMethods());

module.exports = bot;
