const test = require('node:test')
const server = require('../src/server.js')
// const { form } = require('../templates/form.js')

const assert = require('node:assert')

test('form is displayed on page', async () => {
  const app = server.listen(9876)
  const response = await fetch('http://localhost:9876')
  app.close()

  const body = await response.text()
  assert.match(
    body,
    / <input id="username" name="username" placeholder='Username'>/,
    `Expected html to include <input id="username" name="username"> but received ${body}`
  )
})
