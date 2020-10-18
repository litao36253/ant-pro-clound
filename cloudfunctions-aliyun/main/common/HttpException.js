const errorMsg = {
  404: '请求的接口不存在'
}

class HttpException extends Error {
  constructor (errorCode, message) {
    super()
    if (errorCode) {
      this.errorCode = errorCode
      this.message = message || errorMsg[errorCode]
    }
  }
}

module.exports = HttpException
