const express = require('express')
require('dotenv').config()


const loginController = require('./controllers/loginController')
const callbackController = require('./controllers/callbackController')
const refreshTokenController = require('./controllers/refreshTokenController')

const app = express()

app.get('/login', loginController)
app.get('/callback', callbackController)
app.get('/refresh_token/:refresh_token', refreshTokenController)

const port = process.env.PORT || 8888
console.log(`Server listening on http://localhost:${port} 🚀`)
app.listen(port)