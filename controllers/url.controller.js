const { db } = require('../db')
const url = db.get('url')
const urlSchema = require('../models/url.model')
const create = async (req, res) => {
  const { body } = req
  const isValid = await urlSchema.isValid(body)
  if (!isValid) {
    return res.status(400).json({ message: 'Invalid body' })
  }
  const { slug } = body
  const existsUrl = await url.findOne({ slug })
  if (existsUrl) {
    return res.status(400).json({ message: 'Slug already exists' })
  }

  const newURL = await url.insert(body)
  res.jsonp(newURL)
}

const list = async (req, res) => {
  const urls = await url.find()
  res.jsonp(urls)
}

const read = async (req, res) => {
  const { slug } = req.params
  const _url = await url.findOne({ slug })
  res.jsonp(_url)
}

module.exports = {
  create,
  read,
  list,
}
