const router = require('koa-router')();
const SysDataController = require('../controller/sys-data');

router.get('/nav-list', SysDataController.getNavList);

module.exports = router;
