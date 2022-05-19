const express = require('express')
// middleware
const cors = require('cors')
const cc = require('./cc.middleware')
const error = require('./error.middleware')
const checkToken = require('./checkToken.middleware')


module.exports = (app) => {
  // use middleware
  app.use(cors())
  app.use(cc)
  app.use(error)
  app.use(checkToken)
  app.use(express.urlencoded({ extended: false }))

  // static file
  app.use('/uploads', express.static('../uploads'))
}