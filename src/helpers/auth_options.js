const authOptions = (code, form) => ({
  url: `${process.env.SPOTIFY_URI}/api/token`,
  form,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    ).toString('base64')}`,
  },
  json: true,
});

module.exports = authOptions;
