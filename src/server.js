const express = require('express')
const { form } = require('../templates/form.js')
const mockData = require('../mock-data.js')
const server = express()
const posts = require('../templates/posts.js')

const postsArr = [...mockData]

server.post('/', (request, response) => {
  postsArr.push(request.body)
  response.redirect('/')
})

server.get('/', (request, response) => {
  response.send(`       
        <!doctype html>
        <html>
            <head>
                <title>Twitter clone</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
            ${form()}
            ${posts(postsArr)}
            </body>
        </html>;
    `)
})

module.exports = { server }
