const monk = require('monk')
const URL = process.env.MONGODB_URL || 'localhost:27017/urls'

const db = monk(URL)
const urls = db.get('urls')
urls.createIndex({ slug: 1 }, { unique: true })

module.exports.db = db
