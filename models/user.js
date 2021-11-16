const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  regist_date: { type: Date },
  login_date: { type: Date, default: new Date() },
  email: { type: String, default: '' },
  tel: { type: Number },
});
// /**
//  * 添加用户*/
// userSchema.methods.addUser = function () {};
// /**
//  * 查找用户*/
// userSchema.methods.findUser = function () {};

// /**
//  * 修改用户信息*/
// userSchema.methods.editUser = function () {};
// /**
//  * 删除用户**/
// userSchema.methods.deleteUser = function (uid) {};

const User = mongoose.model('users', userSchema, 'users');
module.exports = {
  User,
};
