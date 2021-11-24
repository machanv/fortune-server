const CanvasModel = require('../models/canvas-model');
const crudUtil = require('./crudUtil');

const addCanvasData = async (ctx) => {
  const { name, data } = ctx.request.body;
  await crudUtil.commonAdd(CanvasModel, { name, data }, ctx);
};

const updateCanvas = async (ctx) => {
  const { id, name, data } = ctx.request.body;
  await crudUtil.commonUpdate(CanvasModel, { id }, { name, data }, ctx);
};

const deleteCanvas = async (ctx) => {
  const { id } = ctx.request.body;
  await crudUtil.commonDelete(CanvasModel, { id }, ctx);
};

const getCanvasList = async (ctx) => {
  await crudUtil.commonFind(CanvasModel, null, ctx).then((response) => {
    return response.body;
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
