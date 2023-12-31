# lgtm-kinako

## 概要

きなこ（愛犬）の LGTM 画像を共有出来るサービスです。画像をクリックすると Markdown がコピーされ使用することができます。

- サービス URL
  - https://lgtm-kinako.com/
- バックエンドリポジトリ
  - https://github.com/Kazuya-Sakamoto/lgtm-kinako-api

## 環境

- Node.js v18.18.0
- Nuxt.js v3.6.5
- Vue.js v3.2.36
- pnpm v8.13.1
- TypeScript v5.2.2
- Tailwind CSS v3.3.5

## その他環境

- Monitoring: [Google Analytics](https://analytics.google.com/analytics/web/#/p287815666/reports/dashboard?params=_u..nav%3Dmaui&r=lifecycle-engagement-overview&ruid=lifecycle-engagement-overview,life-cycle,engagement&collectionId=life-cycle)
- Hosting: [Vercel](https://vercel.com/dashboard)
- Icon: [Heroicons](https://heroicons.com/)

## 環境構築

- コンテナ起動

```
$ docker-compose up -d --build
```

- アプリケーションコンテナ内へ移動

```
$ docker-compose exec app sh
```

- 初期設定

```
/src # pnpm install
```

- 起動

```
/src # pnpm dev
```
