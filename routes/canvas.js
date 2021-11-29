const router = require('koa-router')();
const CanvasController = require('../controller/canvas-controller');

router.prefix('/canvas');

router.post('/add', CanvasController.addCanvasData);
router.post('/update', CanvasController.updateCanvas);
router.post('/delete', CanvasController.deleteCanvas);
router.get('/find', CanvasController.getCanvasList);
router.get('/find:id', CanvasController.getOneCanvasInfo);

module.exports = router;
