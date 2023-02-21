const Router = require('koa-router');
const { login } = require('../controller/user.controller');

const router = new Router({ prefix: '/user' });
router.get('/', (ctx, next) => {
  ctx.body = '';
});

router.post('/login', login);

module.exports = router;
