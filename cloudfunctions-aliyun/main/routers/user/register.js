const uniID = require('uni-id')

module.exports = async (ctx, next) => {
  const params = {
    username: ctx._req.event.username,
    password: ctx._req.event.password
  }
  console.log(params)
  const res = await uniID.register(params)
  if (res.code === 0) {
    ctx.body = res
  } else {
    throw new ctx.common.HttpException(11001, res)
  }
}
