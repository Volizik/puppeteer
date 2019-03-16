const combineRouters = require('koa-combine-routers');
const sitesRoutes = require('./sites');
const botRoutes = require('./bot');

const router = combineRouters(
    sitesRoutes,
    botRoutes
);

module.exports = router;
