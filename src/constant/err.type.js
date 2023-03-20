module.exports = {
  // 100** 用户模块
  userFormatError: {
    code: 10001,
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExisted: {
    code: 10002, // 用户已存在
    message: '用户已存在',
    result: '',
  },
  userRegisterError: {
    code: 10003,
    message: '用户注册错误',
    result: '',
  },
  userDoesNotExist: {
    code: 10004,
    message: '用户不存在',
    result: '',
  },
  userLoginError: {
    code: 10005,
    message: '用户登录失败',
    result: '',
  },
  invaildPassword: {
    code: 10006,
    message: '密码不匹配',
    result: '',
  },
  // 101** 授权模块
  tokenExpiredError: {
    code: 10101,
    message: 'token已过期',
    result: '',
  },
  invaildToken: {
    code: 10102,
    message: '无效的token',
    result: '',
  },
  hasNoAdminPermission: {
    code: 10103,
    message: '没有管理员权限',
    result: '',
  },
};
