FROM node:18.18.0-alpine

ENV TZ Asia/Tokyo

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add git && \
    npm install -g npm@latest nuxi nuxt3