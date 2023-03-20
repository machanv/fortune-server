const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const {
  createUser,
  updateUser,
  getUserInfo,
} = require('../service/user.service');
const { JWT_SECRET } = require('../config/config.default');
const {userFormatError,userRegisterError} = require('../constant/err.type')

class UserController {
  async register(ctx) {
    const {user_name,password } = ctx.request.body;
    try{
      const res = await createUser({user_name,password});
    }catch(err){
      console.error(err);
      ctx.app.emit('error',userRegisterError,err);
    }
  }

  async login(ctx) {
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
    } catch (err) {
      console.error(err);
      ctx.app.emit('error',userFormatError,err);
    }
  }

  async updateUserInfo(ctx){

  }
}

module.exports = new UserController();
