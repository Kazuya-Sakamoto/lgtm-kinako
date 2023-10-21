# lgtm-kinako

## 概要

きなこ（うちの愛犬）の LGTM 画像を共有出来るサービスです。画像をクリックすると Markdown がコピーされ使用することができます。

- サービス URL
  - https://lgtm-kinako.com/
- バックエンドリポジトリ
  - https://github.com/Kazuya-Sakamoto/lgtm-kinako-api

## 使用パッケージ

- Node.js v18.18.0
- Nuxt.js v3.6.5
- TypeScript v5.2.2
- Tailwind CSS 3.3.3

## 環境構築

- コンテナ起動

```
$ docker compose up -d
```

- アプリケーションコンテナ内へ移動

```
$ docker-compose exec app sh
```

- 初期設定

```
/src # npm i
```

- 起動

```
/src # npm run dev
```

## 使用ツール

## monitoring

- [Google Analytics](https://analytics.google.com/analytics/web/#/p287815666/reports/dashboard?params=_u..nav%3Dmaui&r=lifecycle-engagement-overview&ruid=lifecycle-engagement-overview,life-cycle,engagement&collectionId=life-cycle)

### hosting

- [Vercel](https://vercel.com/dashboard)

### ui/ux

- [Heroicons](https://heroicons.com/)
