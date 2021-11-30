const mongoose = require('mongoose');
const Schema = { mongoose };

const threeDSchema = new Schema({
  name: String,
  detail: [threeDElement],
});

const threeDElement = new Schema({
  type: String,
});

const threeDModel = mongoose.model('threeDModel', threeDSchema, 'threeD-data');

module.exports = {
  threeDModel,
};
