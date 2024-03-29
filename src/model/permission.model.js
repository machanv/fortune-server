const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

const Permission = seq.define('mc_permission', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '权限名称',
  },
  pid: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '父级权限',
  },
});

Permission.sync({ force: true });
module.exports = Permission;
