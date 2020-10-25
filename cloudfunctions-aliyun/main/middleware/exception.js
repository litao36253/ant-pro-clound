
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
        code: error.errorCode,
        message: error.message,
        deatil: {
          path: ctx._req.url,
          ...error.errorDeatil
        }
      }
    } else {
      console.log(error)
      ctx.body = {
        code: 500,
        message: `服务器发生未知错误：${error.message}`
      }
    }
  }
}
