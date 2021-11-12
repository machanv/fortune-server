const mongoose = require('mongoose');

const { Schema } = mongoose;

const sysDataSchema = new Schema({
  name: String,
  link: String,
});

sysDataSchema.methods.getNavList = function () {};

const SysData = mongoose.model('sysData', sysDataSchema, 'nav-list');

module.exports = {
  SysData,
};
