const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  content: String,
  comments: [
    { body: String, date: { type: Date, default: Date.now }, user: String },
  ],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: { votes: Number, favs: Number },
});

blogSchema.methods.getBlogList = (type) => {
  return mongoose.model('Blog').find({ type: this.type }, type);
};

const BlogModel = mongoose.model('blog', blogSchema, 'blog-list');

module.exports = {
  BlogModel,
};
