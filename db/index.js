const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true
  }).then(() => {
    console.log('connect succeed')
  }).catch(err => {
    console.error('conncet faild', err)
  })
};
