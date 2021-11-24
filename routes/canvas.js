const router = require('koa-router')();
const CanvasController = require('../controller/canvas-controller');

router.prefix('canvas');

router.post('/add', CanvasController.addCanvasData);

router.get('/find', CanvasController.getCanvasList);

module.exports = router;
