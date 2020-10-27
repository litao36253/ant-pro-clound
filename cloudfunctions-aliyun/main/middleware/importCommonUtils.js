const config = require('../config.js')
const HttpException = require('../common/HttpException.js')

module.exports = async (ctx, next) => {
  ctx.common = {
    config,
    HttpException
  }
  await next()
}
