const router = require('koa-router')();

router.prefix('/users');

router.get('/', async (ctx, next) => {
  ctx.body = 'this is a users response!';
});

router.post('/add', async (ctx, next) => {
  let {username, pwd} = ctx.request.body;
  console.log(username, pwd);
  ctx.body = 'add user';
});

router.get('/bar/:id', async (ctx, next) => {
  let id = ctx.params.id;
  ctx.body = 'this is a users/bar response';
  console.log(id);
});

router.get('/detail', async (ctx, next) => {
  // const {id} = ctx.request.query;
  const {id} = ctx.query;
  console.log(id);
  ctx.body = '用户详情';
});

router.get('/del/:id', async (ctx, next) => {
  const {id} = ctx.params;
  console.log(`删除用户${id}成功`);
  ctx.body = `删除用户${id}成功`;
});

router.put('/edit', async (ctx, next) => {
  const {id} = ctx.query;
  ctx.body = 'edit success';
  console.log(id);
})

module.exports = router;
