const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const {
  createUser,
  updateUser,
  getUserInfo,
} = require('../service/user.service');
const { JWT_SECRET } = require('../config/config.default');

class UserController {
  async register() {}

  async login(ctx, next) {
    const { user_name, password } = ctx.request.body;
    try {
      const res = await getUserInfo({ user_name });
      const { password, ...resUser } = res;
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
        },
      };
    } catch (err) {}
  }
}

module.exports = new UserController();
