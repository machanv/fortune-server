const Router = require('koa-router');
const {
  // login,
  register,
} = require('../controller/user.controller');

const router = new Router({ prefix: '/user' });
router.get('/', (ctx, next) => {
  ctx.body = 'hello user';
});

// router.post('/login', login);
router.post('/register', register);

module.exports = router;
