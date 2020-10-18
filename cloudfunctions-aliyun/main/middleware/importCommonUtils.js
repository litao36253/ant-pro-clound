const HttpException = require('../common/HttpException.js')

module.exports = async (ctx, next) => {
  ctx.common = {
    HttpException
  }
  next()
}
