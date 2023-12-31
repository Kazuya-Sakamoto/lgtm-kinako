FROM node:18.18.0-alpine

ENV TZ Asia/Tokyo

RUN npm install -g pnpm

# pnpmのグローバルディレクトリの作成
RUN mkdir -p /usr/local/share/pnpm-global

# 環境変数の設定
ENV PNPM_HOME /usr/local/share/pnpm-global
ENV PATH $PNPM_HOME:$PATH

RUN mkdir src

RUN apk update && \
    apk upgrade && \
    apk add git

RUN pnpm install -g nuxi nuxt3