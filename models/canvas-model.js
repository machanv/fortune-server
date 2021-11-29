const mongoose = require('mongoose');
const { Schema } = mongoose;

const canvasModelSchema = new Schema({
  name: String,
  data: {
    width: Number,
    height: Number,
    detail: Array,
  },
});

const CanvasModel = mongoose.model(
  'canvasModel',
  canvasModelSchema,
  'canvas-data'
);

module.exports = {
  CanvasModel,
};
