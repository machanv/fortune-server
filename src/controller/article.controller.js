const Article = require('../model/article.model');
const { createArticle } = require('../service/article.service');
const { createArticleFailed } = require('../const/err.type');

class ArticleController {
  // 创建文档
  async create(ctx, next) {
    try {
      const { title, content, image, auth } = ctx.request.body;
      if (!title || !content) {
        createArticleFailed.message = '创建文档失败,标题及内容不可为空';
        return ctx.app.emit('error', createArticleFailed, ctx);
      } else {
        const res = await createArticle(title, content, image, auth);
        if (res) {
          ctx.body = {
            code: 0,
            message: '新建文章成功',
            result: res,
          };
        } else {
          console.error(res);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  async validator(ctx, next) {
    try {
    } catch (err) {
      console.error(err);
    }
  }

  // // 更新文档
  // async updateArticle(ctx, next) {}
  // // 删除文档
  // async removeArticle(ctx, next) {}

  // // 查询文档列表
  // async getArticleList(ctx, next) {}
  // // 查询文档详情
  // async getOneArticle(ctx, next) {}
}

module.exports = new ArticleController();
