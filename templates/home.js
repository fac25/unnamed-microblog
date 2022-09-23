const { form } = require('./form.js')
const posts = require('./posts.js')

function home(postsArr, errors = {}, values = {}) {
  return `       
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
            <div class="container error-container">
            <p>${errors.username || ''}</p>
            <p>${errors.message || ''}</p>
            </div>
            ${form(values)}
            <div class='container posts'>
              ${posts(postsArr)}
            </div>
            </body>
        </html>
    `
}

module.exports = home
