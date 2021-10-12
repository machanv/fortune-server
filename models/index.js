const mongoose = require('mongoose');

// const schema = new mongoose.Schema({
//   p1: String,
//   p2: String
// });

// const Obj = mongoose.model('names', schema);

// system user

const docSchema = new mongoose.Schema({
  name: String
})
const Doc = mongoose.model('doc', docSchema);

module.exports = {
  Doc
}
