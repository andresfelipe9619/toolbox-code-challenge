/* global describe it */
const app = require('../app')
const request = require('supertest')(app)
const expect = require('chai').expect

describe('GET /iecho', function () {
  it('Returns status code 400. Not sending query params', async function () {
    const response = await request.get('/iecho')
    expect(response.status).to.eql(400)
  })

  it('Returns status code 200. Text is not Palindrome', async function () {
    const response = await request.get('/iecho?text=test')
    expect(response.status).to.eql(200)
    expect(response.body.palindrome).to.eql(false)
  })

  it('Returns status code 200. Text is Palindrome', async function () {
    const response = await request.get('/iecho?text=ala')
    expect(response.status).to.eql(200)
    expect(response.body.ok).to.eql(true)
    expect(response.body.palindrome).to.eql(true)
  })
})
