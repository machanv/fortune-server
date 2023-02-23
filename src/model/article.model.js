/** 文章 */
const { DataTypes, Deferrable } = require('sequelize');
const seq = require('../db/seq');
const User = require('./user.model');

const Article = seq.define('mc_article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: '文章标题',
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '文章内容',
  },
  tag: {
    type: DataTypes.ARRAY,
    allowNull: false,
    comment: '标签',
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '内容预览',
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
  comment: {
    type: DataTypes.ARRAY, // 属性包括
    allowNull: true,
    comment: '评论',
  },
});

module.exports = Article;
