const { db } = require('../db')
const urls = db.get('urls')
const urlSchema = require('../models/url.model')
const path = require('path')

const create = async (req, res) => {
  try {
    const { body } = req
    const isValid = await urlSchema.isValid(body)
    if (!isValid) {
      return res
        .status(400)
        .json({ message: 'Điền thông tin có tâm đi bạn êi!' })
    }
    const { slug } = body
    const existsUrl = await urls.findOne({ slug })
    if (existsUrl) {
      return res.status(400).json({ message: 'Slug có người dùng rồi bạn êi!' })
    }

    const newUrl = await urls.insert(body)
    res.jsonp(newUrl.slug)
  } catch (error) {
    throw error
  }
}

const list = async (req, res) => {
  try {
    const _urls = await urls.find()
    res.jsonp(_urls)
  } catch (error) {
    throw error
  }
}

const read = async (req, res) => {
  try {
    const { slug } = req.params
    const _url = await urls.findOne({ slug })
    if (!_url) {
      const viewPath = path.join(path.resolve(), 'public/404.html')
      return res.status(404).sendFile(viewPath)
    }
    return res.redirect(_url.url)
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  read,
  list,
}
