const Koa = require('koa');
const { koaBody } = require('koa-body');

const errHandle = require('./errHandle');
const router = require('../router');

const app = new Koa();
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

app.use((ctx, next) => {
  // ctx.body = '';
});
app.on('error', errHandle);
module.exports = app;
