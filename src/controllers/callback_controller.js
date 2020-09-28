/* eslint-disable camelcase */
const querystring = require('querystring');
const request = require('request');

const authOptions = require('../helpers/auth_options');

const callbackController = (req, res) => {
  const code = req.query.code || null;
  const form = {
    code,
    redirect_uri: process.env.REDIRECT_URI,
    grant_type: 'authorization_code',
  };

  const options = authOptions(code, form);

  request.post(options, (error, response, body) => {
    const { access_token, refresh_token } = body;

    const uri = process.env.FRONTEND_URI;
    res.redirect(`${uri}?${querystring.stringify({ access_token, refresh_token })}`);
  });
};

module.exports = callbackController;
