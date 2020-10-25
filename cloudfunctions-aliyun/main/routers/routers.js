const auth = require('./auth/auth.js')

module.exports = (app) => {
  auth(app)
}
