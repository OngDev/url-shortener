const monk = require('monk')
const URL = process.env.MONGODB_URL || 'localhost:27017/urls'

const db = monk(URL)
const urls = db.get('urls')
urls.index('slug')

module.exports.db = db
