
const fs = require('fs')
const util = require('util')

const readAsync = util.promisify(fs.readFile)
const writeAsync = util.promisify(fs.writeFile)
const deleteAsync = util.promisify(fs.unlink)

const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/data/:ownerName', async (req, res) => {

  const result = await readData(req.params.ownerName)

  if (!result.exists) {
    res.status(404)
      .json({
        message: "The data you're looking for does not exist. Please create it first."
      })
    return
  }

  res.json({
    name: req.params.ownerName,
    data: result.data
  })
})

app.post('/data/:ownerName', async (req, res) => {

  const dataToWrite = req.body

  await writeData(req.params.ownerName, dataToWrite)

  res.json({
    message: "Data written successfully."
  })
})

app.delete('/data/:ownerName', async (req, res) => {

  await deleteData(req.params.ownerName)

  res.json({
    message: "Data deleted successfully"
  })
})

app.use(function (req, res) {

  res.status(404)
    .json({
      message: "the route you're looking for does not exist"
    })
})

app.listen(3000, err => {

  if (err) {
    console.error(err, "failed to start server")
    return
  }

  console.info("server started on port 3000")
})

/**
 * @param {String} ownerName
 * @return {Promise<{exists: Boolean, data: Object}>}
 */
async function readData(ownerName) {

  try {
    const data = await readAsync(constructFilePath(ownerName), 'utf-8')

    return {
      exists: true,
      data: JSON.parse(data)
    }
  } catch (e) {
    if (e.code === 'ENOENT') {
      return {
        exists: false
      }
    }
  }
}

/**
 * @param {String} ownerName
 * @param {String} data
 * @return {Promise<void>}
 */
async function writeData(ownerName, data) {
  await writeAsync(constructFilePath(ownerName), JSON.stringify(data, null, 2), 'utf-8')
}

async function deleteData(ownerName) {
  try {
    await deleteAsync(constructFilePath(ownerName))
  } catch (e) {
    if (e.code === 'ENOENT') {
      return
    }

    throw e
  }
}

/**
 * @param {String} ownerName
 * @return {String}
 */
function constructFilePath(ownerName) {
  return `${__dirname}/data/${ownerName}.json`
}
