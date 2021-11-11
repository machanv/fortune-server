const router = require('koa-router')();
const SysDataController = require('../controller/sys-data');

router.prefix('/navList');

router.get('/find', SysDataController.getNavList);

module.exports = router;
