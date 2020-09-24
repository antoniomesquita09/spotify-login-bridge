const querystring = require('querystring')

const loginController = (req, res) => {
    const urlQueryString = querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri: process.env.REDIRECT_URI
    })

    return res.redirect(`${process.env.SPOTIFY_URI}/authorize?${urlQueryString}`)
}

module.exports = loginController