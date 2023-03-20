const path = require('path');
const Koa = require('koa');
const { koaBody } = require('koa-body');
const KoaStatic = require('koa-static');
const parameter = require('koa-parameter');

const errHandle = require('./errHandle');
const router = require('../router');

const app = new Koa();
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../upload'),
      keepExtensions: true,
    },
  })
);

app.use(KoaStatic(path.join(__dirname, '../upload')));
app.use(parameter(app));

app.use(router.routes()).use(router.allowedMethods());

app.use((ctx, next) => {
  // ctx.body = '';
});
app.on('error', errHandle);
module.exports = app;
