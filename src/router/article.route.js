const Router = require('koa-router');
const {
  create,
  validator,
  // getArticleList
} = require('../controller/article.controller');
const router = new Router({ prefix: '/article' });

router.post('/create', create, validator);
// router.post('/list', getArticleList);

module.exports = router;
