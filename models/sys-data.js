const mongoose = require('mongoose');

const {Schema} = mongoose;

const sysDataSchema = new Schema({
  letter: String,
  data: [String],
  id: String
})

const SysData = new mongoose.model('sysData', sysDataSchema);

module.exports = {
  SysData
}
