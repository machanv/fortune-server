const Router = require('koa-router');

// 评论的路由定义
const router = new Router('/comment');

router.post('/');

module.exports = router;
