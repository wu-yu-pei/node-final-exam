// express
const express = require('express')
const setupRouter = require('../router/index')
const setupMiddleware = require('../middleware/index')
const { port } = require('../config/index')

module.exports = () => {
  const app = express()

  setupMiddleware(app)
  setupRouter(app)

  // runing
  app.listen(port)
}