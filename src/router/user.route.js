const Router = require('koa-router');
const { login, register } = require('../controller/user.controller');

const router = new Router({ prefix: '/users' });
router.get('/', (ctx, next) => {
  ctx.body = 'hello user';
});

// 注册
router.post('/register', register);

// 登录
router.post('/login', login);

module.exports = router;
