const test = require('node:test')
const assert = require('node:assert')
const { request } = require('./helpers.js')

test('render', async () => {
  const { status, body } = await request('/', {
    method: 'POST',
    body: 'username=mariapaz&message=hello-alls',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
  console.log(body)
  assert.equal(status, 200)
  assert.match(body, /mariapaz/)
})
