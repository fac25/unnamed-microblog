const test = require('node:test')
const assert = require('node:assert')
const { request } = require('./helpers.js')

test('render', async () => {
  const { status, body } = await request('/', {
    method: 'POST',
    body: 'username=mariapaz&message=helloAllex',
  })
})
