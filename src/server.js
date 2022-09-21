const express = require('express')
const server = express()
const mockData = require('./mockData.js')

const postsArr = [...mockData]

server.post('/', (request, response) => {
  const feed = posts(postsArr)
  response.send('/')
})

module.exports = server
