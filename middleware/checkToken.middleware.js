// 导入配置文件
const config = require('../config')

// 解析 token 的中间件
const expressJWT = require('express-jwt')

module.exports = expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] })