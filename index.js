const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv')


dotenv.config()
const app = express()

app.enable('trust proxy')
app.use(helmet())
app.use(morgan('common'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./public'))

const urlRoute = require('./routes/url.route')
const slugRoute = require('./routes/slug.route')
app.use('/urls', urlRoute)
app.use('/', slugRoute)

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
