const Koa = require('koa');
const send = require('koa-send');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const apiRouter = require('./routes/api');

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(bodyParser({
  json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
}));
app.use(cors());
app.use(apiRouter.routes());

app.use(serve('./client/dist'));
app.use(async (ctx) => await send(ctx, 'index.html', { root: __dirname + '/client/dist' }));

app.listen(port, () => console.log(`Server is running on ${port} port!`));
