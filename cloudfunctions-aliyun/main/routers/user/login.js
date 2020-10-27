const uniID = require('uni-id')

module.exports = async (ctx, next) => {
  const params = {
    username: ctx._req.event.username,
    password: ctx._req.event.password
  }
  const res = await uniID.login(params)
  if (res.code === 0) {
    ctx.body = res
  } else {
    throw new ctx.common.HttpException(10001, ctx.common.config.env === 'development' ? res : undefined)
  }
}
