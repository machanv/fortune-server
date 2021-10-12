const router = require('koa-router')();
const {User} = require('../models');

router.prefix('/users');

let userList = [
    {username: 'admin', password: '123'},
    {username: 'viola', password: '456'},
];

// router.get('/', async (ctx, next) => {
//     // ctx.body = '<h1>this is a users response!</h1>';
//     // ctx.set("Allow", "GET,POST");
//     ctx.status = 200;
//     ctx.body = {
//         code: 200,
//         msg: 'this is a users response!',
//         data: userList
//     }
// });

//  添加系统用户
router.post('/add', async (ctx, next) => {
    let {username = '',password=''} = ctx.request.query;
    ctx.body = {
        username,password
    }
    // User.create()
});

// 修改系统用户
router.put('/update', async (ctx, next) => {
    const user = ctx.request.body;
    userList.splice(Number(user.id), 1, {
        username: user.username,
        password: user.password
    });
    ctx.body = 'update succeed';
})

// 删除系统用户
router.post('/del', async (ctx, next) => {
   
})

// 查询系统用户
router.post('/find', async (ctx, next) => {
   
})

module.exports = router;
