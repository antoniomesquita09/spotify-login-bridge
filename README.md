# Spotifood-bridge 🌉

Spotifood bridge to get login user token from spotify API.

## First things first

- Login to your account on [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
- Create a new App
- Now you have your a **Client ID** and **Client Secret**

## Getting started
In the project directory, you can run:

```console
cp .env.sample .env
```

Atribute to **SPOTIFY_CLIENT_ID** and **SPOTIFY_CLIENT_SECRET** variables in `.env` file the **Client Id** and **Client Secret** that you got from spotify dashboard.

---

### Running with docker

Make sure you have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) already installed in your machine.

```console
docker-compose up --build
```

To run the app inside a docker container.

---

### Running with yarn

Make sure you have [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install) already installed in your machine.

```console
yarn
```

To install all the dependencies listed in package.json

```console
yarn start
```
or (with [nodemon](https://www.npmjs.com/package/nodemon))
```console
yarn dev
```

Runs the app in the development mode.<br />
Now you are ready to run the [Spotifood App](https://github.com/antoniomesquita09/ifood-frontend-test).

---

### Deployed version

You can see the Spotifood website production version on:
[https://antonio-spotifood.netlify.app/](https://antonio-spotifood.netlify.app/)<br />
The Spotifood-bridge is also deployed to help users to login on Spotifood, the URL is:
[https://login-bridge.herokuapp.com/](https://login-bridge.herokuapp.com/)<br />

And for your best experience you wont't see that URL during your navigation in Spotifood 😋.

Author: Antonio Mesquita Junior<br />
Hope you enjoy ☺️