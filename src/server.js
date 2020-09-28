/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const loginController = require('./controllers/login_controller');
const callbackController = require('./controllers/callback_controller');
const refreshTokenController = require('./controllers/refresh_token_controller');

const app = express();

app.use(cors());

app.get('/login', loginController);
app.get('/callback', callbackController);
app.get('/refresh_token/:refresh_token', refreshTokenController);

const port = process.env.PORT || 8888;
console.log(`Server listening on http://localhost:${port} 🚀`);
app.listen(port);

const gracefulShutdown = (reason, callback) => {
  console.info(`App closed through ${reason}.`);
  callback();
};

// For app termination
process.on('SIGINT', () => gracefulShutdown('app termination', () => process.exit(0)));
