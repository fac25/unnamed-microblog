const express = require('express')
const { form } = require("../templates/form.js")

const server = express()

server.get("/", (request, response) => {

    response.send(form())
})

module.exports = server
