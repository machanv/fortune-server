const User = require('../model/user.model');

class UserService {
  async createUser(user_name, password) {
    const res = await User.create({ user_name, password });
    return res;
  }

  async updateUser(id, user_name, password) {
    const res = await User.update({ user_name, password }, { where: id });
    return res;
  }

  async getUserInfo({ id, user_name, password, email, is_admin }) {
    const whereOpt = {};
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    password && Object.assign(whereOpt, { password });
    email && Object.assign(whereOpt, { email });
    is_admin && Object.assign(whereOpt, { is_admin });

    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'email', 'is_admin'],
      where: whereOpt,
    });
    return (res && res.dataValues) || null;
  }
}

module.exports = UserService;
