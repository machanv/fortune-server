/**
 * 用于添加数据的公共方法
 * @param {*} model，模型
 * @param {*} params，参数
 * @param {*} ctx，上下文
 * */
const commonAdd = (model, params, ctx) =>
  model
    .create(params)
    .then((result) => {
      if (result) {
        ctx.body = {
          code: 200,
          msg: '添加成功',
          data: result,
        };
        console.log(ctx);
      } else {
        ctx.body = {
          code: 300,
          msg: '添加失败',
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '添加时出现异常',
      };
      console.log(err);
    });

/**
 * 用于更新数据的公共方法
 * @param {*} model
 * @param {*} params
 * @param {*} ctx
 * */
const commonUpdate = async (model, where, params, ctx) =>
  model
    .updateOne(where, params)
    .then((result) => {
      if (result) {
        ctx.body = {
          code: 200,
          msg: '更新成功',
          data: result,
        };
      } else {
        ctx.body = {
          code: 300,
          msg: '更新失败',
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '更新时出现异常',
      };
      console.log(err);
    });

/**
 * 用于删除数据的公共方法
 * @param {*} model
 * @param {*} params
 * @param {*} ctx
 * */
const commonDelete = async (model, where, ctx) =>
  model
    .findOneAndDelete(where)
    .then((result) => {
      if (result) {
        ctx.body = {
          code: 200,
          msg: '删除成功',
          data: result,
        };
      } else {
        ctx.body = {
          code: 300,
          msg: '删除失败',
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '删除时出现异常',
      };
      console.log(err);
    });

/** 用于查询数据的公共方法
 * @param {*} model
 * @param {*} params
 * @param {*} ctx
 * */
const commonFind = (model, where, ctx, attr = '') =>
  model
    .find(where)
    .then((result) => {
      if (result) {
        if (attr) {
          const arr = result.map((item) => {
            const attrList = attr.split(',');
            const newNode = {};
            for (let node of attrList) {
              newNode[node] = item[node];
            }
            return newNode;
          });
          ctx.body = {
            code: 200,
            msg: '查询成功',
            data: arr,
          };
        } else {
          ctx.body = {
            code: 200,
            msg: '查询成功',
            data: result,
          };
        }
      } else {
        ctx.body = {
          code: 300,
          msg: '查询失败',
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '查询时出现异常',
      };
      console.log(err);
    });

/** 用于查询单个数据的公共方法
 * @param {*} model
 * @param {*} params
 * @param {*} ctx
 * */
const findOne = async (model, where, ctx, attr = '') =>
  model
    .findOne(where)
    .then((result) => {
      if (result) {
        if (attr) {
          const attrList = attr.split(',');
          const newNode = {};
          for (let item of attrList) {
            newNode[item] = result[item];
          }
          ctx.body = {
            code: 200,
            msg: '查询成功',
            data: newNode,
          };
        } else {
          ctx.body = {
            code: 200,
            msg: '查询成功',
            data: result,
          };
        }
      } else {
        ctx.body = {
          code: 300,
          msg: '查询失败',
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '查询时出现异常',
      };
      console.log(err);
    });

module.exports = {
  commonAdd,
  commonUpdate,
  commonDelete,
  commonFind,
  findOne,
};
