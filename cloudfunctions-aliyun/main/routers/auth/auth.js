const login = require('./login.js')

const prefix = '/auth'
module.exports = (app) => {
  app.router(`${prefix}/login`, login)
}
