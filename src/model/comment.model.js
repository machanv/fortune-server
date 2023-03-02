const { DataTypes } = require('sequelize');

const seq = require('../db/seq');

const User = require('./user.model');
const Article = require('./article.model');

const Comment = seq.define('mc_comment', {});

module.exports = Comment;
