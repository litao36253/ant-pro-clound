'use strict'

const TcbRouter = require('tcb-router')
const createrRouters = require('./routers/routers.js')
const exception = require('./middleware/exception.js')
const importCommonUtils = require('./middleware/importCommonUtils.js')

exports.main = async (event, context) => {
  let app
  if (event.httpMethod === 'POST' && event.headers.accept.indexOf('application/json') > -1) {
    const $url = event.path
    app = new TcbRouter({
      event: {
        ...JSON.parse(event.body),
        $url
      }
    })
  } else {
    app = new TcbRouter({
      event
    })
  }

  // 定义 ctx.common 用于存放一些全局的公用工具
  app.use(importCommonUtils)

  // 统一的全局错误处理
  app.use(exception)

  // 创建路由
  createrRouters(app)

  return app.serve()
}
