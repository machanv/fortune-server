const Router = require('koa-router');
const { register, login } = require('../controller/user.controller');

const router = new Router({ prefix: '/user' });
router.get('/', register);

router.post('/login', login);

module.exports = router;
