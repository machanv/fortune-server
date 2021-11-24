const router = require('koa-router')();
const UserController = require('../controller/user-controller');

router.prefix('/users');

// 用户注册
router.post('/regist', UserController.userAdd);

// 用户登录
router.post('/login', UserController.userLogin);

// 修改系统用户信息
router.post('/update', UserController.userUpdate);

// 删除系统用户
router.post('/del', UserController.userDelete);

// 查询所有系统用户
router.get('/find', UserController.findUsers);

// 查询单个系统用户
router.get('/find/:id', UserController.findOneUser);

// 查询所有的用户名、手机号码、email
router.get('/findPublic', UserController.findUserPublicInfo);

module.exports = router;
