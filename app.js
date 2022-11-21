const Koa = require('koa');
const app = new Koa();

const port = 3000;
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log(`server is listening port ${port}`)
});
