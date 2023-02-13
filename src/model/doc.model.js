/** 文章 */
const { DataTypes, Deferrable } = require('sequelize');
const seq = require('../db/seq');
const User = require('./user.model');

const Doc = seq.define('mc_doc', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: '文章标题',
  },
  context: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '文章内容',
  },
  author: {
    type: DataTypes.NUMBER,
    allowNull: false,
    comment: '作者',
    references: {
      model: User, // 关联用户表，查询用户名
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  images: {
    type: DataTypes.ARRAY,
    allowNull: true,
    comment: '图片',
  },
  content: {
    type: DataTypes.ARRAY, // 属性包括
    allowNull: true,
    comment: '评论',
  },
});

module.exports = Doc;
