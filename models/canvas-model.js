const mongoose = require('mongoose');
const { Schema } = mongoose;

const canvasModelSchema = new Schema({
  name: String,
  data: JSON,
});

const CanvasModel = mongoose.model(
  'canvasModel',
  canvasModelSchema,
  'canvas-data'
);

module.exports = {
  CanvasModel,
};
