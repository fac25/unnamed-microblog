const { form } = require('./form.js')
const posts = require('./posts.js')

function home(postsArr, errors = {}, values = {}) {
  return `       
        <!doctype html>
        <html>

          <head>
            <title>Twooter</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel='stylesheet' href='style.css' />
            <link rel='stylesheet' href='stylesheets/form.css' />
            <link rel='stylesheet' href='stylesheets/posts.css' />
          </head>
          <body>
            <header class="container">
              <h1>Twooter</h1>
            </header>
            <main>
              <div class="container error-container">
              <p>${errors.username || ''}</p>
              <p>${errors.message || ''}</p>
              </div>
              ${form(values)}
              <div class='container posts'>
                ${posts(postsArr)}
              </div>
            </main>
          </body>

        </html>
    `
}

module.exports = home
