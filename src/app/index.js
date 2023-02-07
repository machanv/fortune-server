const Koa = require('koa');
const { KoaBody } = require('koa-body');

const docRouter = require('../router/doc.route');

const app = new Koa();
app.use(KoaBody);

app.use(docRouter);

app.use((ctx, next) => {
  ctx.body = '';
});

module.exports = app;
