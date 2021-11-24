const { Blog } = require('../models/blog-model');
const crudUtl = require('./crudUtil');

const addBlog = async (ctx) => {
  const {
    author = '',
    content = '',
    title = '',
    comments = [],
  } = ctx.request.body;
  await crudUtl.commonAdd(Blog, { author, content, title, comments }, ctx);
};

const updateBlog = async (ctx) => {
  const { id = '', content = '', title = '' } = ctx.request.body;
  await crudUtl.commonUpdate(
    Blog,
    { _id: id },
    {
      content,
      title,
    },
    ctx
  );
};

const deleteBlog = async (ctx) => {
  const params = ctx.request.body;
  await crudUtl.commonDelete(Blog, { _id: params.id }, ctx);
};

const findBlogList = async (ctx) => {
  await crudUtl.commonFind(Blog, null, ctx);
};

const findOneBlog = async (ctx) => {
  const { id } = ctx.params;
  await crudUtl.findOne(Blog, { _id: id }, ctx);
};

module.exports = {
  addBlog,
  updateBlog,
  deleteBlog,
  findBlogList,
  findOneBlog,
};
