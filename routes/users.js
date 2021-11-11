const router = require('koa-router')();
const userController = require('../controller/user');

router.prefix('/users');

// 添加系统用户
router.post('/add', userController.userAdd);

// 修改系统用户
router.post('/update', userController.userUpdate);

// 删除系统用户
router.post('/del', userController.userDelete);

// 查询所有系统用户
router.get('/find', userController.findUsers);

// 查询单个系统用户
router.get('/find/:id', userController.findOneUser);

module.exports = router;
