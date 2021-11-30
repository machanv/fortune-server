const mongoose = require('mongoose');
const { Schema } = mongoose;

const canvasElementScheam = new Schema({
  x: Number,
  y: Number,
});

const canvasModelSchema = new Schema({
  name: String,
  data: {
    width: Number,
    height: Number,
    detail: [canvasElementScheam],
  },
  preview: String,
});

const CanvasModel = mongoose.model(
  'canvasModel',
  canvasModelSchema,
  'canvas-data'
);

module.exports = {
  CanvasModel,
};
