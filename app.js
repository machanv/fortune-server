const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
const port = 3000;

app.use(async ctx=>{
  ctx.body = 'Hello World'
});

app.listen(3000);
