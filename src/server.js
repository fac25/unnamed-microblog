const express = require('express')
const { form } = require('../templates/form.js')
const posts = require('../templates/posts.js')
const mockData = require('../mockData.js')
const server = express()
const staticHandler = express.static('public')

const postsArr = [...mockData]

const bodyParser = express.urlencoded()

server.use(staticHandler)

server.post('/', bodyParser, (request, response) => {
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
                <link rel='stylesheet' href='style.css' />
                <link rel='stylesheet' href='stylesheets/forms.css' />
                <link rel='stylesheet' href='stylesheets/posts.css' />
            </head>
            <body>
            ${form()}
            ${posts(postsArr)}
            </body>
        </html>
    `)
})

module.exports = server
