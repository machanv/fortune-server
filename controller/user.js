// add user
const {User} = require("../models/user");

const userAdd = async (ctx) => {
  let {username = 'viola', password = ''} = ctx.request.body;
  // await findOneUser(ctx).then(result => {
  //
  // }).then();
  await User.create({username, password}).then(result => {
    if (result) {
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: result
      }
    } else {
      ctx.body = {
        code: 300,
        msg: '添加失败'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '添加时出现异常'
    }
    console.log(err);
  })
}

// 修改用户
const userUpdate = async (ctx) => {
  const params = ctx.request.body;
  await User.updateOne(
    {_id: params._id},
    {
      username: params.username,
      password: params.password
    })
    .then(result => {
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
    })
    .catch(err => {
      ctx.body = {
        code: 400,
        msg: '更新时出现异常'
      }
      console.log(err);
    })
}

// 删除用户
const userDelete = async (ctx) => {
  const {_id} = ctx.request.body;
  await User.findOneAndDelete({_id})
    .then(result => {
      if (result) {
        ctx.body = {
          code: 200,
          msg: '删除成功',
          data: result
        }
      } else {
        ctx.body = {
          code: 300,
          msg: '删除失败'
        }
      }
    }).catch(err => {
      ctx.body = {
        code: 400,
        msg: '删除时出现异常'
      }
      console.log(err);
    })
}
// 查询用户
const findUsers = async (ctx) => {
  const params = ctx.request.body;
  await User.find()
    .then(result => {
      if (result) {
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data: result
        }
      } else {
        ctx.body = {
          code: 300,
          msg: '查询失败'
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: 400,
        msg: '查询时出现异常'
      }
      console.log(err);
    });
}

// 查询单个用户
const findOneUser = async (ctx) => {
  const {id} = ctx.params;
  await User.findOne({_id: id}).then(result => {
    if (result) {
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: result
      }
    } else {
      ctx.body = {
        code: 300,
        msg: '查询失败'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: 400,
      msg: '查询时出现异常'
    }
    console.log(err);
  })
}

module.exports = {
  userAdd, userUpdate, userDelete, findUsers, findOneUser
}
