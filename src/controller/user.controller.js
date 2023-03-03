const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const {
  createUser,
  // updateUser,
  // getUserInfo,
} = require('../service/user.service');
const { JWT_SECRET } = require('../config/config.default');

const { userRegisterError } = require('../const/err.type');

class UserController {
  // 注册
  async register(ctx, next) {
    // 获取数据
    // console.log(ctx.request.body);
    const { user_name, password } = ctx.request.body;

    // 操作数据库
    // try {
    //   const res = await createUser(user_name, password);
    //   console.log(res);

    //   // 返回结果
    //   // if (ctx.s) {
    //   ctx.body = {
    //     code: 0,
    //     message: '用户注册成功',
    //     result: {
    //       id: res.id,
    //       user_name: res.user_name,
    //     },
    //   };
    // } catch (err) {
    //   console.log(err);
    //   ctx.app.emit('error', userRegisterError, ctx);
    // }

    // }
  }

  // 登录
  // async login(ctx, next) {
  //   const { user_name, password } = ctx.request.body;
  //   try {
  //     const res = await getUserInfo({ user_name });
  //     const { password, ...resUser } = res;
  //     ctx.body = {
  //       code: 0,
  //       message: '用户登录成功',
  //       result: {
  //         token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
  //       },
  //     };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}

module.exports = new UserController();
