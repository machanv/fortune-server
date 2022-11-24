const Koa = require('koa');
const app = new Koa();

const port = 3000;

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();

  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.on('error', (err) => {
  log.error('server error', err);
});

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log(`server is listening port ${port}`);
});
