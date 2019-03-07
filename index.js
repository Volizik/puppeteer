const Koa = require('koa');
const send = require('koa-send');
const serve = require('koa-static');

const apiRouter = require('./routes/api');
const app = new Koa();

app.use(apiRouter.routes());

app.use(serve('./client/dist'));
app.use(async (ctx) => await send(ctx, 'index.html', { root: __dirname + '/client/dist' }));

app.listen(8080, () => console.log('Server is running!'));
