const ThreeDimensional = require('../model/three-dimensional.model');

class ThreeDimensionalService {
  async createThreeDimensional(title, data) {
    const res = await ThreeDimensional.create({ title, data });
    return res;
  }

  async updateThreeDimensional(id, title, data) {
    const res = await ThreeDimensional.update({ title, data }, { where: id });
  }
}

module.exports = ThreeDimensionalService;
