const {Blog} = require('../models/blog');

const addBlog = async (ctx) => {
  let {content, title, author, create_time} = ctx.request.body;
  await Blog.create({content, title, author, create_time}).then(result => {
    if (result) {
      ctx.body = {
        code: 200,
        msg: '新建文章成功',
        data: result
      }
    } else {
      ctx.body = {
        code: 300,
        msg: '新建文章失败'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '添加文章异常'
    };
    console.log(err);
  })
}

const updateBlog = async (ctx) => {
  const params = ctx.request.body;
  await Blog.updateOne({_id: params.id},
    {content: params.content}).then(result => {
    if (result) {
      ctx.body = {
        code: 200,
        msg: '更新成功',
        data: result
      }
    } else {
      ctx.body = {
        code: 300,
        msg: '更新失败'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '更新异常'
    }
  })
}

const deleteBlog = async (ctx) => {

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
