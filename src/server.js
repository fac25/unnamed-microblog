const express = require('express')

const { form } = require("../templates/form.js")

const server = express()
const mockData = require('./mockData.js')

const postsArr = [...mockData]

server.post('/', (request, response) => {
  const feed = posts(postsArr)
  response.send('/')
})

server.get("/", (request, response) => {

    response.send(form())
})

module.exports = server
