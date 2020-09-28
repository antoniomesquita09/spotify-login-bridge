const request = require('request');

const authOptions = require('../helpers/auth_options');

const refreshTokenController = (req, res) => {
  const refreshToken = req.params.refresh_token || null;

  const form = {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  };
  const options = authOptions(null, form);

  request.post(options, (error, response, body) => {
    const newToken = body.access_token;
    res.json({ access_token: newToken });
  });
};

module.exports = refreshTokenController;
