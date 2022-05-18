// express
const express = require('express')

// express instance
const app = express()

// middleware
const cors = require('cors')
const cc = require('./middleware/cc.middleware')
const error = require('./middleware/error.middleware')
const checkToken = require('./middleware/checkToken.middleware')

// router
const userRouter = require('./router/user')
const userinfoRouter = require('./router/userinfo')
const artCateRouter = require('./router/artcate')
const articleRouter = require('./router/article')

// use middleware
app.use(cors())
app.use(cc)
app.use(error)
app.use(checkToken)
app.use(express.urlencoded({ extended: false }))

// use router
app.use('/api', userRouter)
app.use('/my', userinfoRouter)
app.use('/my/article', artCateRouter)
app.use('/my/article', articleRouter)

// static file
app.use('/uploads', express.static('./uploads'))

// runing
app.listen(7777, function () {
  console.log('server running at http://127.0.0.1:7777')
})