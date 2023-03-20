const articleValidator = async (ctx, next) => {
  await next();
};

module.exports = { articleValidator };
