FROM node:14.4.0-alpine as base

ARG PORT
ARG SPOTIFY_CLIENT_ID
ARG SPOTIFY_CLIENT_SECRET
ARG FRONTEND_URI
ARG REDIRECT_URI
ARG SPOTIFY_URI

ENV PORT=$PORT
ENV SPOTIFY_CLIENT_SECRET=$SPOTIFY_CLIENT_SECRET
ENV FRONTEND_URI=$FRONTEND_URI
ENV REDIRECT_URI=$REDIRECT_URI
ENV SPOTIFY_URI=$SPOTIFY_URI


RUN apk add --update --no-cache alpine-sdk python

WORKDIR /spotifood-bridge/

COPY package.json yarn.lock /spotifood-bridge/

RUN yarn --pure-lockfile

COPY src /spotifood-bridge/src/

EXPOSE 8888

FROM base as development

CMD yarn start
