const Koa = require('koa');
const { koaBody } = require('koa-body');

const userRouter = require('../router/user.route');
const docRouter = require('../router/doc.route');
const twoDimensionalRouter = require('../router/two-dimensional.route');
const threeDimensionalRouter = require('../router/three-dimensional.route');

const app = new Koa();
app.use(koaBody());

app.use(userRouter.routes());
app.use(docRouter.routes());
app.use(twoDimensionalRouter.routes());
app.use(threeDimensionalRouter.routes());

app.use((ctx, next) => {
  ctx.body = '';
});

module.exports = app;
