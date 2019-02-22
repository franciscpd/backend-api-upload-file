const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes')

/**
 * Database setup
 */
mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(routes)

app.listen(3000)
