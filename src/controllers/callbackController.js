const querystring = require('querystring')
const request = require('request')

const callbackController = (req, res) => {
    const code = req.query.code || null
    const authOptions = {
      url: `${process.env.SPOTIFY_URI}/api/token`,
      form: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      const { access_token, refresh_token } = body
  
      const uri = process.env.FRONTEND_URI
      res.redirect(`${uri}?${querystring.stringify({ access_token, refresh_token })}`)
    })
}

module.exports = callbackController