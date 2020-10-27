const errorMsg = {
  404: '请求的接口不存在',
  10001: '用户名或密码错误',
  11001: '注册失败'
}

class HttpException extends Error {
  constructor (errorCode, errorDeatil) {
    super()
    if (errorCode) {
      this.errorCode = errorCode
      this.message = errorMsg[errorCode]
      this.errorDeatil = errorDeatil || {}
    }
  }
}

module.exports = HttpException
