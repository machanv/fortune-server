const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const User = require('./user.model');
const Article = require('./article.model');

// 评论
const Comment = seq.define('mc_comment', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '用户id，发评论的人',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '标题',
  },
  detail_content: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '评论内容',
  },
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user_info',
});

// Comment.sync({ force: true });
module.exports = Comment;
