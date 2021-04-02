const Router = require('express').Router()
const url = require('../controllers/url.controller')

Router.get('/', url.list)
Router.post('/', url.create)

module.exports = Router
