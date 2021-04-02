const Router = require('express').Router()
const url = require('../controllers/url.controller')
const rateLimit = require('express-rate-limit')
const slowDown = require('express-slow-down')

const limiter = rateLimit({
  windowMs: 15 * 1000,
  max: 3,
  message: 'Nhấn thêm nữa là đá đít !',
})

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 500,
})

Router.get('/', url.list)
Router.post('/', limiter, speedLimiter, url.create)

module.exports = Router
