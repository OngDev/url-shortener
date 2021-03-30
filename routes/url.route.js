const Router = require('express').Router()
const url = require('../controllers/url.controller')

Router.get('/', url.list)
Router.get('/:slug', url.read)
Router.post('/', url.create)

module.exports = Router
