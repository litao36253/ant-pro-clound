
module.exports = async (ctx, next) => {
  try {
    await next()
    if (ctx.body) {
      ctx.body = {
        code: 0,
        data: ctx.body
      }
    } else {
      throw new ctx.common.HttpException(404)
    }
  } catch (error) {
    if (error instanceof ctx.common.HttpException) {
      ctx.body = {
        message: error.message,
        code: error.errorCode
      }
    } else {
      ctx.body = {
        message: `服务器发生未知错误：${error.message}`,
        code: 500
      }
    }
  }
}
