const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

// 用户角色
const Role = seq.define('mv_role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '角色名称',
  },
});
// Role.sync({ force: true });
module.exports = Role;
