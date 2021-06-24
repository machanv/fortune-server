const Koa = require("koa");
const fs = require("fs");
const Router = require("koa-router");
const views = require("koa-views");

const app = new Koa();
const port = 3000;

const router = new Router();

app.use(views(__dirname + "/views", {
  map: {
    html: "pug",
  },
}));
router.get('/',async (ctx) => {
  ctx.set("content-type", "text/html;charset=utf8");
  // ctx.body = "Hello World";
  await ctx.render('index.pug');
});
app.use(router.routes());
app.listen(3000);
