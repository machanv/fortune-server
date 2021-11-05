const {Blog} = require('../models/blog');
const crudUtl = require('./crudUtil');

const addBlog = async (ctx) => {
  let params = ctx.request.body;
  await crudUtl.commonAdd(Blog, {params}, ctx);
}

const updateBlog = async (ctx) => {
  const params = ctx.request.body;
  await crudUtl.commonUpdate(Blog, {_id: params.id}, ctx)
}

const deleteBlog = async (ctx) => {
  const params = ctx.request.body;
  await crudUtl.commonDelete(Blog, {_id: params.id}, ctx)
}

const findBlogList = async (ctx) => {
  await Blog.find().then(result => {
    if (result) {
      ctx.body = {
        code: 200,
        msg: '查询列表成功',
        data: result
      }
    }
  }).catch(err => {
    ctx.body = {
      code: 300,
      msg: '查询文章列表异常'
    };
    console.log(err);
  })
}

const findOneBlog = async (ctx) => {
  const {id} = ctx.params;
  await Blog.findOne({_id: id})
    .then(result => {
      if (result) {
        ctx.body = {
          code: 200,
          msg: '查询文章成功',
          data: result
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: 400,
        msg: '查询文章异常'
      };
      console.log(err);
    })
}

module.exports = {
  addBlog, updateBlog, deleteBlog, findBlogList, findOneBlog
}
