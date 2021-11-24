const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String, required: true },
  avatar: { type: String },
  regist_date: { type: Date },
  regist_type: { type: Number, default: 1 }, // 1：邮箱注册；2：手机号码注册
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

const User = mongoose.model('user', userSchema, 'user-list');
module.exports = {
  User,
};
