'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const tv4 = require('tv4')

const app = express()

app.use(bodyParser.json())

const inputSchema = require('./input-schema.json')

/**
 * Input looks like:
 * {
 *   "id": 123,
 *   "first_name": "Shaun",
 *   "last_name": "D",
 *   "birth": {
 *     "date": "1991/5/7",
 *     "place": "Habra"
 *   },
 *   "accepting_friend_requests": false
 * }
 *
 * First three properties are mandatory, the rest are not.
 */
app.post('/users-painful', (req, res) => {

  // checks is `id` is provided and is also a number
  if (typeof req.body.id !== 'number') {
    res.status(400).json({ error: 'id should be a number' })
    return
  }

  // checks if `accepting_friend_requests` is provided, if yes only then checks the type is boolean,
  // otherwise ignores it
  if (req.body.accepting_friend_requests !== undefined && typeof req.body.accepting_friend_requests !== 'boolean') {
    res.status(400).json({ error: 'accepting_friend_requests should be a boolean' })
    return
  }

  // and you can imagine how writing this out for multiple properties can be very painful

  console.log(req.body)
  res.json(req.body)
})

app.post('/users-with-schema', (req, res) => {

  const data = req.body

  const isValid = tv4.validate(data, inputSchema)

  if (!isValid) {

    const error = tv4.error
    console.error(error)

    res.status(400).json({
      error: {
        message: error.message,
        dataPath: error.dataPath
      }
    })
    return
  }

  console.log(data)
  res.json(data)
})

app.listen(3300, (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.log('Server started')
})
