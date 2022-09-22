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
  postsArr.unshift(request.body)
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
                <link rel='stylesheet' href='stylesheets/form.css' />
                <link rel='stylesheet' href='stylesheets/posts.css' />
            </head>
            <body>
            ${form()}
            <div class='container posts'>
              ${posts(postsArr)}
            </div>
            </body>
        </html>
    `)
})

module.exports = server
