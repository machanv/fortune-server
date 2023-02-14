const TwoDimensional = require('../model/two-dimensional.model');

class TwoDimensionalService {
  // 增
  async createTwoDimensional(title, data) {
    const res = await TwoDimensional.create({ title, data });
    return res;
  }

  // 删

  // 改

  // 查
}
module.exports = TwoDimensionalService;
