// add user
const { User } = require('../models/user');
const crudUtil = require('./crudUtil');

// 用户注册
const userAdd = async (ctx) => {
  let {
    username = '',
    password = '',
    avatar = '',
    tel,
    email,
  } = ctx.request.body;
  if (username === '') {
    ctx.body = {
      code: 300,
      msg: '用户名不可为空',
    };
  } else if (password === '') {
    ctx.body = {
      code: 300,
      msg: '密码不可为空',
    };
  } else {
    await crudUtil
      .commonAdd(User, { username, password, avatar, tel, email }, ctx)
      .then((result) => {
        console.log(result);
      });
  }
};

/** 用户名密码登录
 *  type = 0 用户名登录
 *  type = 1 手机号登录
 *  type = 2 邮箱登录 */
const userLogin = async (ctx) => {
  let {
    username = '',
    password = '',
    type = 0,
    tel = -1,
    email,
  } = ctx.request.body;
  switch (type) {
    case 0:
      await crudUtil.findOne(User, { username, password }, ctx);
      break;
    case 1:
      await crudUtil.findOne(User, { tel, password }, ctx);
      break;
    case 2:
      await crudUtil.findOne(User, { email, password }, ctx);
      break;
    default:
      await crudUtil.findOne(User, { email, password }, ctx);
  }
};

// 修改用户
const userUpdate = async (ctx) => {
  const params = ctx.request.body;
  await crudUtil.commonUpdate(
    User,
    { id: params._id },
    {
      username: params.username,
      password: params.password,
    },
    ctx
  );
};

// 删除用户
const userDelete = async (ctx) => {
  const { id } = ctx.request.body;
  await crudUtil.commonDelete(User, { _id: id }, ctx);
};
// 查询用户
const findUsers = async (ctx) => {
  await crudUtil.commonFind(User, null, ctx);
};

// 查询单个用户
const findOneUser = async (ctx) => {
  const { id } = ctx.params;
  await crudUtil.findOne(User, { _id: id }, ctx, 'username,tel,email');
};

// 查询所有的用户名、手机号码、email
const findUserPublicInfo = async (ctx) => {
  await crudUtil.commonFind(User, null, ctx, 'username,tel,email');
};

module.exports = {
  userAdd,
  userLogin,
  userUpdate,
  userDelete,
  findUsers,
  findOneUser,
  findUserPublicInfo,
};
