const Router = require('express').Router()
const url = require('../controllers/url.controller')

Router.get('/:slug', url.read)

module.exports = Router
