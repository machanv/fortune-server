const Article = require('../model/article.model');

// 操作数据库的方法
class ArticleService {
  // 增
  async createArticle(title, content, images, author) {
    const res = await Article.create({ title, content, images, author });
    return res;
  }

  // 修改
  async updateArticle(id, title, content, images) {
    const res = await Article.update(
      { title, content, images },
      {
        where: { id },
      }
    );
    return res;
  }

  // 删除
  async deleteArticle(id) {
    const res = Article.destroy({
      where: { id },
    });
    return res;
  }

  // 查询
  async findDocs(title, tag) {
    const res = Article.findAll({
      where: { title, tag },
    });
    return res;
  }

  async findOneArticle(id) {
    const res = Article.findOne({
      where: { id },
    });
    return res;
  }
}

module.exports = new ArticleService();
