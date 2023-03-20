/** 文章 */
const { DataTypes, Deferrable } = require('sequelize');
const seq = require('../db/seq');
const User = require('./user.model');
const Comment = require('./comment.model');

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
    type: DataTypes.STRING,
    allowNull: false,
    comment: '标签',
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '内容预览',
  },
  author: {
    type: DataTypes.BIGINT,
    allowNull: false,
    comment: '作者',
    // references: {
    //   model: User, // 关联用户表，查询用户名
    //   key: 'id',
    //   deferrable: Deferrable.INITIALLY_IMMEDIATE,
    // },
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '文章状态，0:未发布；1：草稿箱；2：已发布；3：垃圾回收',
  },
  // images: {
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  //   allowNull: true,
  //   comment: '图片',
  // },
  // comment: {
  //   type: DataTypes.ARRAY(Comment), // 属性包括
  //   allowNull: true,
  //   comment: '评论',
  // },
});
// Article.sync({ force: true });

module.exports = Article;
