const { CanvasModel } = require('../models/canvas-model');
const crudUtil = require('./crudUtil');

const addCanvasData = async (ctx) => {
  const { name, data } = ctx.request.body;
  await crudUtil.commonAdd(CanvasModel, { name, data }, ctx);
};

const updateCanvas = async (ctx) => {
  const { id, name, detail } = ctx.request.body;
  if (id === '' || id === undefined) {
    ctx.body = {
      code: 300,
      msg: 'id不可为空',
    };
  } else if (typeof detail !== Object) {
    ctx.body = {
      code: 300,
      msg: '数据不正确',
    };
  } else {
    await crudUtil.commonUpdate(CanvasModel, { id }, { name, data }, ctx);
  }
};

const deleteCanvas = async (ctx) => {
  const { id } = ctx.request.body;
  if (id === '' || id === undefined) {
    ctx.body = {
      code: 300,
      msg: 'id不可为空',
    };
  } else {
    await crudUtil.commonDelete(CanvasModel, { id }, ctx).then((result) => {
      if (result && result.data) {
        ctx.body = {
          code: 200,
          msg: '删除成功',
        };
      }
    });
  }
};

const getCanvasList = async (ctx) => {
  await crudUtil.commonFind(CanvasModel, null, ctx).then((result) => {
    if (result && result.data) {
      const arr = [];
      result.forEach((item) => {
        const newNode = {
          id: item._id,
          name: item.name,
        };
        arr.push(newNode);
      });
      ctx.body = {
        code: 200,
        data: arr,
      };
    }
  });
};

const getOneCanvasInfo = async (ctx) => {
  const { id, keyword } = ctx.request.query;
  await crudUtil.findOne(CanvasModel, { id }, ctx, keyword);
};

module.exports = {
  addCanvasData,
  updateCanvas,
  deleteCanvas,
  getCanvasList,
  getOneCanvasInfo,
};
