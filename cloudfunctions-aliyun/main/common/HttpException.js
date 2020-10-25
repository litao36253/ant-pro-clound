const errorMsg = {
  404: '请求的接口不存在'
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
