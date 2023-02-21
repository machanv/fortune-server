/** 2D物体 */
const { DataTypes } = reuqire('sequelize');
const seq = require('../db/seq');

const TwoDimensional = seq.define('mc_two_dimensional', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '2D文件标题',
  },
  data: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '2D文件具体内容',
  },
});

module.exports = TwoDimensional;
