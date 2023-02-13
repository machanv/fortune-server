/** 3D 物体 */
const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

const ThreeDimensional = seq.define('mc_three_dimensional', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '3D文件标题',
  },
  data: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '3D文件具体内容',
  },
});

module.exports = ThreeDimensional;
