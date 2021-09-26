const router = require('koa-router')();

router.prefix('/users');

let userList = [
  {username: 'admin', password: '123'},
  {username: 'viola', password: '456'},
];

router.get('/', async (ctx, next) => {
  // ctx.body = '<h1>this is a users response!</h1>';
  ctx.set("Allow", "GET,POST");
  ctx.status = 200;
  ctx.body = {
    code: 200,
    msg: 'this is a users response!',
    data: userList
  }
});

router.post('/add', async (ctx, next) => {
  let {username, password} = ctx.request.body;
  userList.push({
    username, password
  });
  console.log(ctx.request);
  console.log(username, password);
  ctx.body = {
    code: 200,
    msg: 'add succeed'
  };
});

router.get('/find/:id', async (ctx, next) => {
  let id = ctx.params.id;
  if (Number(id) > userList.length - 1) {
    ctx.throw(412, '超过最大用户序号')
  }
  ctx.body = {
    code: 200,
    msg: 'search succeed',
    data: userList[id]
  };
  console.log(userList[id]);
});

router.get('/detail', async (ctx, next) => {
  // const {id} = ctx.request.query;
  const {id} = ctx.query;
  console.log(id);
  ctx.body = '用户详情';
});

router.delete('/del', async (ctx, next) => {
  const {id} = ctx.request.body;
  userList.splice(Number(id), 1);
  console.log(`删除用户${id}成功`);
  ctx.body = `删除用户${id}成功`;
});

router.delete('/del/:id', async (ctx, next) => {
  const {id} = ctx.request.body;
  if (Number(id) > userList.length - 1) {
    ctx.throw(412, '超过当前用户数量')
  }
  userList.splice(Number(id), 1);
  console.log(`删除用户${id}成功`);
  ctx.body = `删除用户${id}成功`;
});

router.put('/edit', async (ctx, next) => {
  const {id} = ctx.query;
  ctx.body = 'edit succeed';
  console.log(id);
})

router.put('/update', async (ctx, next) => {
  const user = ctx.request.body;
  userList.splice(Number(user.id), 1, {
    username: user.username,
    password: user.password
  });
  ctx.body = 'update succeed';
})


module.exports = router;
