/** 用户 */
const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

// 创建模型
const User = seq.define('mc_user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '注册邮箱唯一',
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名唯一',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  area: {
    type: DataTypes.INTEGER,
    comment: '用户所在地',
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否管理员，0：不是管理员（默认），1：是管理员',
  },
});

// User.sync({ force: true });
module.exports = User;
