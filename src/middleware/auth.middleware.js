const jsonWebToken = require('jsonwebtoken');
const { JWT_TOKEN } = require('../config/config.default');
const { hasNoAdminPermission } = require('../const/err.type');

// const auth = async (ctx, next) => {
//   const { authorization } = ctx.request.header;
//   const token = authorization.replace('', '');
//   try {
//     const user = jsonWebToken.verify(token, JWT_TOKEN);
//     ctx.state.user = user;
//   } catch (error) {
//     console.log(error);
//   }
//   await next();
// };

// const hasAdminPermission = async (ctx, next) => {
//   const { is_admin } = ctx.state.user;
//   if (!is_admin) {
//     console.error('该用户没有管理员权限', ctx.state.user);
//     return ctx.app.emit('error', hasNoAdminPermission, ctx);
//   }
// };
module.exports = {
  // auth, hasAdminPermission
};
