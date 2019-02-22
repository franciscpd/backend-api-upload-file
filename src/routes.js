const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

module.exports = routes
