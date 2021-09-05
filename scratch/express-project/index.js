
const fs = require('fs') //filesystem
const util = require('util')
const crypto = require('crypto')

const asyncReadFile = util.promisify(fs.readFile)
const asyncAppendFile = util.promisify(fs.appendFile)
const asyncWriteFile = util.promisify(fs.writeFile)

const auth = require('basic-auth')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

const PORT = 3000
const accessTokenPath = `${__dirname}/access-tokens.json`

// ['name:password', 'name:password']
const credentials = fs.readFileSync(`${__dirname}/credentials.txt`, 'utf8')
  .split('\n')

// console.log(credentials)

const app = express()

app.use(cors())

// MIDDLEWARE
app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(function(
  req,
  res,
  next) {

  console.log(`REQ:   ${req.method} ${req.path}`)

  next()
})

// 4xx - User error
// 400 - Wrong input data
// 401 - Authentication failure

// app.use(function basicAuthChecker(req, res, next) {
//
//   // { 'name': 'username', pass: 'password' }
//   const user = auth(req)
//   if (user) {
//     // console.log(req.headers)
//
//     // console.log(`${user.name} is trying to log in with creds ${req.headers['authorization']}`)
//
//     for (const credential of credentials) {
//
//       const [username, password] = credential.split(':')
//
//       if (user.name === username && user.pass === password) {
//         next()
//         return
//       }
//     }
//   }
//
//   res.writeHead(401, { 'WWW-Authenticate': 'Basic' })
//   res.end()
// })

// assume that registration has already been done

// read username/password from body
app.post('/login', async function (req, res) {

  // { username: <...>, password: <...> }
  const sentUsername = req.body.username
  const sentPassword = req.body.password

  // input validation
  if (!sentUsername || !sentPassword) {
    res.status(400)
      .json({
        "message": "both username and password must be provided"
      })
    return
  }

  const credential = credentials.find(credential => {
    const [storedUsername, storedPassword] = credential.split(':')

    return sentUsername === storedUsername && hashPassword(sentPassword) === storedPassword
  })

  if (!credential) {

    res.status(401)
      .json({
        "message": "username or password incorrect"
      })
    return
  }

  const storedAccessTokens = JSON.parse(await asyncReadFile(accessTokenPath, 'utf8'))

  if (!storedAccessTokens[sentUsername]) {
    storedAccessTokens[sentUsername] = {}
  }

  const randomString = crypto.randomBytes(64).toString('hex')

  storedAccessTokens[sentUsername][randomString] = {
    createdAt: new Date()
  }

  await asyncWriteFile(accessTokenPath, JSON.stringify(storedAccessTokens, null, 2))

  res.json({
    accessToken: randomString
  })
})

app.use(async function tokenChecker(req, res, next) {

  // token? - just strings
  // NOT - book, car, seat, chair
  // IS - randomized, long strings, mostly unique (0.000000001% chance of not being unique)
  // Ex.: vdewd3e8fv48fv3uc3vf93f4@#$@#3vb39fuvb3f93bvf9u3fb93evf93uvf93rfv3r9ufv3fu93vf9u3vbf9u3b%@#$@#vfu93

  // user has to provide access token
  // access token should be valid

  // Bearer 5bf7c7c592af4ba15cede6fb23db5eca08595d619c13394029c7f12bcd3eb2e5682c4e2837d31ee7237c43a011f0418efe97999fa7edfbc07bdb17d880f036f6

  const headerValue = req.header('authorization')
  const token = headerValue.split(' ')[1]

  const storedAccessTokens = JSON.parse(await asyncReadFile(accessTokenPath, 'utf8'))

  const usernames = Object.keys(storedAccessTokens)

  const username = usernames.find(username => {
    return storedAccessTokens[username][token]
  })

  if (!username) {
    res.status(401)
      .json({
        "message": "unknown access token"
      })
    return
  }

  next()
})

// attack surface
// 0 attack surface - does not exist
// 100% security - does not exist

// impact surface
// how much damage can be done in an attack

// password hashing
// convert a string into a new form, with a one-way function
// "original password" -> "hashed password"
// "password" -> "5f4dcc3b5aa765d61d8327deb882cf99"
// "5f4dcc3b5aa765d61d8327deb882cf99": md5 - 2 days -> ??
// "5f4dcc3b5aa765d61d8327deb882cf99": sha1 - 2 months -> ??
// "5f4dcc3b5aa765d61d8327deb882cf99": sha3 - 200 years -> ??

// open facebook
// - request to show your data
// - show your stream
// - show your friend updates
// - show friend requests

// username-password
// - can reveal identity : tokens are anonymous
// - every request is an opportunity for a leak
// - long-lived: 6 months+, tokens have a very short lifetime: 1 hour, 1 week

// 1. reduce attack surface
// 2. reduce impact surface


// metaphor:
// house - 6.5 entrances: 2 doors, 4 windows, cat flap
// house attack surface of 6.5 entrances

// base64 is Encoding, NOT Encryption

// TLS / SSL

// https - http over ssl

// coffee-shop wifi
// the router can read all your messages
//

app.use('/greeting', function (req, res, next) {

  if (!req.query.firstname || !req.query.lastname) {

    res.status(400).send("Both 'firstname' and 'lastname' should be present as query params")
    return
  }

  next()
})

app.get('/', function (req, res) {

  res.send('Hello Class 13-14')
})

// http://<hostname>/<path>/<path>/...?<param-name> = <param=value> & <param-name-2>

app.get('/greeting/hello-name', function (
  req,
  res
) {
  // QUERY PARAMS

  const first = req.query.firstname
  const last = req.query.lastname

  res.send(`Hello ${first}, from the House of ${last}`)
})

// ?firstname=Shaun
app.get('/greeting/welcome', function (
  req,
  res
) {
  // QUERY PARAMS

  const first = req.query.firstname
  const last = req.query.lastname

  res.send(`Welcome ${first}, from the House of ${last}`)
})

app.get('/hello-from/:city', function (
  req,
  res
) {

  // ROUTE PARAMS

  const city = req.params.city

  res.send(`Hello you, from ${city}`)
})

// HTTP METHODS/VERBS
// - GET
// - POST

// POSTing

// route, path, endpoint

app.post('/mirror', async function(req, res) {

  // await asyncAppendFile(`${input.city}.txt`, `${input.name}\n`)

  res.send(req.body)
})

// /org/:orgname/student/:studentname/city

// ENCODINGS - ContentEncoding
// utf-8, utf8, base64
// BINARY ENCODINGS
// - pictures (JPEG, PNG), audio (MP3, AAC), video (AVI, MP4, FLV)
// - Protobuf, Thrift, Avro

// ASCII
// shaun (utf8), c2hhdW4= (base64), 736861756e (hex)

// wall, প্রাচীর, दीवार

// wall

// ContentType

// YAML, TOML, JSON <- TEXT FORMATS

const list = []

app.get('/students/:city', async function(req, res, next) {

  try {
    const list = await asyncReadFile(`./${req.params.city}.txt`, 'utf8')

    res.send({
      list: list
    })
  } catch (err) {

    next(err)
  }
})

app.use(function(
  err,
  req,
  res,
  next
) {

  console.log(`ERROR: ${req.method} ${req.path} : ${err.message}`)
  res.status(500).send({
    error_message: err.message
  })
})

app.get('/weather/:city', function(req, res) {

  res.send(`Weather in ${req.params.city} is nice.`)
})

app.listen(PORT, err => {

  if (err) {
    throw err
  }

  console.log(`Server listening on port ${PORT}`)
})

function hashPassword(input) {
  return crypto.createHash('sha1').update(input).digest('hex')
}


// AUTHENTICATION
// Registration - an account
// Login        - same account

// 6ba50630949e6aab273010be18d55e3c125e63bd7c58dbea02eae45b86a6c7cbad03d412dca68aec43877186329ae2679154e36406df6e2bf4ddbbf6abab3747

// database
// user table, accessTokens table, password table
// user table:
// -username
// -email
// -id
// -password

// Encrypting:
// encrypt(algorithm, originalText, key) -> encryptedText
// decrypt(algorithm, encryptedText, key) -> originalText

// hashing = one-way
// encrypt/decrypt

function encrypt(text){
  var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


