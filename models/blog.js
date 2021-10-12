import mongoose from 'mongoose';

const {Schema} = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{body: String, date: Date, user: String}],
  date: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {votes: Number, favs: Number}
})

blogSchema.methods.getBlogList = (type) => {
  return mongoose.model('Blog').find({type: this.type}, type)
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  Blog
}


