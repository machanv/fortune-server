import {Blog} from "../models/blog";

const router = require('koa-router')();

router.prefix('blog');

const blogList = new Blog({type: type});

router.post('/add', async (ctx, next) => {
  const body = ctx.request.body;
  await blogList.save();
});

router.get('/list', async (ctx, next) => {
  const {type} = ctx.query;

  ctx.body = blogList;
});

module.exports = router;
