const test = require('node:test')
const server = require('../src/server.js')
const assert = require('node:assert')

test('upon submition a new post is created', async () => {
  const app = server.listen(9877)
  const response = await fetch('http://localhost:9877', {
    method: 'POST',
    body: 'username=oli&message=hello-from-oli',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
  app.close()
  const body = await response.text()

  assert.match(
    body,
    /hello-from-oli/,
    `Expected hello-from-oli but received ${body}`
  )
})
