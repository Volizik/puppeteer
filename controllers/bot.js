const bot = require('../bot');

module.exports.startBot = (ctx) => {
    bot.run();
    ctx.body = ''
};

module.exports.stopBot = (ctx) => {
    bot.stop();
    ctx.body = ''
};
