const router = require('koa-router')();
const BlogController = require('../controller/blog');

router.prefix('/blog');

router.post('/add', BlogController.addBlog);
router.post('/update', BlogController.updateBlog);
router.post('/delete', BlogController.deleteBlog);
router.get('/find', BlogController.findBlogList);
router.get('/find/:id', BlogController.findOneBlog);

module.exports = router;
