const express = require('express')
const server = express()
const home = require('../templates/home.js')
const mockData = require('../mockData.js')
const staticHandler = express.static('public')

const postsArr = [...mockData]

const bodyParser = express.urlencoded()

server.use(staticHandler)

server.post('/', bodyParser, (request, response) => {
  const username = request.body.username
  const message = request.body.message
  const errors = {}

  if (username === '') errors.username = 'Username required.'
  if (message === '') errors.message = 'Message required.'

  if ('username' in errors || 'message' in errors)
    return response.status(400).send(home(postsArr, errors))

  postsArr.unshift(request.body)
  response.redirect('/')
})

server.get('/', (request, response) => {
  response.send(home(postsArr))
})

module.exports = server
