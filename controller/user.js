// add user
const { User } = require('../models/user');
const crudUtil = require('./crudUtil');

const userAdd = async (ctx) => {
  let { username = 'viola', password = '' } = ctx.request.body;
  await crudUtil.commonAdd(User, { username, password }, ctx);
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
  await crudUtil.findOne(User, { _id: id }, ctx);
};

module.exports = {
  userAdd,
  userUpdate,
  userDelete,
  findUsers,
  findOneUser,
};
