const monk = require('monk')
const URL = process.env.MONGODB_URL || 'localhost:27017/urls'

const db = monk(URL)
const url = db.get('url')
url.index('slug')

module.exports.db = db
