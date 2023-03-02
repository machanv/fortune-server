const Router = require('koa-router');
const { login, regist } = require('../controller/user.controller');

const router = new Router({ prefix: '/user' });
router.get('/', (ctx, next) => {
  ctx.body = '';
});

router.post('/login', login);
router.post('/regist', regist);

module.exports = router;
