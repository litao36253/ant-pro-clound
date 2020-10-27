const login = require('./login.js')
const register = require('./register.js')
const logout = require('./logout.js')

const prefix = '/user'
module.exports = (app) => {
  app.router(`${prefix}/login`, login)
  app.router(`${prefix}/register`, register)
  app.router(`${prefix}/logout`, logout)
}
