const querystring = require('querystring')
const request = require('request')

const refreshTokenController = (req, res) => {
    const refreshToken = req.params.refresh_token || null

    const authOptions = {
      url: `${process.env.SPOTIFY_URI}/api/token`,
      form: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
      },
      json: true
    }
    
    request.post(authOptions, function(error, response, body) {
      const newToken = body.access_token
      res.json({ access_token: newToken })
    })
}

module.exports = refreshTokenController