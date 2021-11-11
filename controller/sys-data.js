const { SysData } = require('../models/sys-data');
const crudUtil = require('./crudUtil');

const getNavList = async (ctx) => {
  await crudUtil.commonFind(SysData, null, ctx);
};

module.exports = {
  getNavList,
};
