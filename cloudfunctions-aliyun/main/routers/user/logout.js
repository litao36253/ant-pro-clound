const uniID = require('uni-id')

module.exports = async (ctx, next) => {
  const token = ctx._req.event.token
  console.log(token)
  const res = await uniID.logout(token)
  if (res.code === 0) {
    ctx.body = res
  } else {
    throw new ctx.common.HttpException(10001, ctx.common.config.env === 'development' ? res : undefined)
  }
}
