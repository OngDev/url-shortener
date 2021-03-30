const { db } = require('../db')
const urls = db.get('urls')
const urlSchema = require('../models/url.model')
const path = require('path')
const create = async (req, res) => {
  const { body } = req
  const isValid = await urlSchema.isValid(body)
  if (!isValid) {
    return res.status(400).json({ message: 'Invalid body' })
  }
  const { slug } = body
  const existsUrl = await urls.findOne({ slug })
  if (existsUrl) {
    return res.status(400).json({ message: 'Slug already exists' })
  }

  const newUrl = await urls.insert(body)
  res.jsonp(newUrl)
}

const list = async (req, res) => {
  const _urls = await urls.find()
  res.jsonp(_urls)
}

const read = async (req, res) => {
  const { slug } = req.params
  const _url = await urls.findOne({ slug })
  if (!_url) {
    const viewPath = path.join(path.resolve(), 'public/404.html')
    return res.status(404).sendFile(viewPath)
  }
  return res.redirect(_url.url)
}

module.exports = {
  create,
  read,
  list,
}
