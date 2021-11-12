const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
/**
 * 添加用户*/
userSchema.methods.addUser = function () {};
/**
 * 查找用户*/
userSchema.methods.findUser = function () {};

/**
 * 修改用户信息*/
userSchema.methods.editUser = function () {};
/**
 * 删除用户**/
userSchema.methods.deleteUser = function (uid) {};

const User = mongoose.model('users', userSchema, 'users');
module.exports = {
  User,
};
