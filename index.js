const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
const app = express()

app.use(helmet())
app.use(morgan('common'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./public'))

const urlRoute = require('./routes/url.route')
app.use('/urls', urlRoute)

app.use((req, res, next) => {
  const viewPath = path.join(path.resolve(), 'public/404.html')
  return res.status(404).sendFile(viewPath)
})

const port = process.env.PORT || 3333
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
