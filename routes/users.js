const router = require('koa-router')();
const userController = require('../controller/user');

router.prefix('/users');

// 用户注册
router.post('/regist', userController.userAdd);

// 用户登录
router.post('/login', userController.userLogin);

// 修改系统用户信息
router.post('/update', userController.userUpdate);

// 删除系统用户
router.post('/del', userController.userDelete);

// 查询所有系统用户
router.get('/find', userController.findUsers);

// 查询单个系统用户
router.get('/find/:id', userController.findOneUser);

// 查询所有的用户名、手机号码、email
router.get('/findPublic', userController.findUserPublicInfo);

module.exports = router;
