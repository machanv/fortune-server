const mongoose = require('mongoose');
const Schema = { mongoose };

const threeDSchema = new Schema({
  name: String,
  data: JSON,
});

const threeDModel = mongoose.model('threeDModel', threeDSchema, 'threeD-data');

module.exports = {
  threeDModel,
};
