const uniID = require('uni-id')

module.exports = async (ctx, next) => {
  const params = {
    username: ctx._req.event.username,
    password: ctx._req.event.username
  }
  ctx.body = await uniID.register(params)
}
