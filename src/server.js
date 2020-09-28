/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const loginController = require('./controllers/loginController');
const callbackController = require('./controllers/callbackController');
const refreshTokenController = require('./controllers/refreshTokenController');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(compression());

app.get('/login', loginController);
app.get('/callback', callbackController);
app.get('/refresh_token/:refresh_token', refreshTokenController);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port} 🚀`);
});

const gracefulShutdown = (reason, callback) => {
  console.info(`App closed through ${reason}.`);
  callback();
};

// For app termination
process.on('SIGINT', () => gracefulShutdown('app termination', () => process.exit(0)));
