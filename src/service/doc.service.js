const Doc = require('../model/doc.model');
const UserService = require('./user.service');

class DocService {
  // 增
  async createDoc(title, content, images, author) {
    const res = await Doc.create({ title, content, images, author });
    return res;
  }

  // 修改
  async updateDoc(id, title, content, images) {
    const res = await Doc.update(
      { title, content, images },
      {
        where: { id },
      }
    );
    return res;
  }

  // 删除
  async deleteDoc(id) {
    const res = Doc.destroy({
      where: { id },
    });
    return res;
  }

  // 查询
  async findDocs(title, tag) {
    const res = Doc.findAll({
      where: { title, tag },
    });
    return res;
  }

  async findOneDoc(id) {
    const res = Doc.findOne({
      where: { id },
    });
    return res;
  }
}

module.exports = UserService;
