// router
const userRouter = require('./user')
const userinfoRouter = require('./userinfo')
const artCateRouter = require('./artcate')
const articleRouter = require('./article')

// use router
module.exports = (app) => {
  app.use('/api', userRouter)
  app.use('/my', userinfoRouter)
  app.use('/my/article', artCateRouter)
  app.use('/my/article', articleRouter)
}
