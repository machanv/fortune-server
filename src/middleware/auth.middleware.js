const jsonWebToken = require('jsonwebtoken');
const { JWT_TOKEN } = require('../config/config.default');

const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header;
  const token = authorization.replace('', '');
  try {
    const user = jsonWebToken.verify(token, JWT_TOKEN);
    ctx.state.user = user;
  } catch (error) {}
  await next();
};
module.exports = { auth };
