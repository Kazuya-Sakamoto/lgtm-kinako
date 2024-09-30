# lgtm-kinako

![LGTM](https://d18g0hf2wnz3gs.cloudfront.net/20240413001214.JPG)

## 概要

きなこ（愛犬）の LGTM 画像を共有出来るサービスです。画像をクリックすると Markdown がコピーされ使用することができます。

- サービス URL
  - https://lgtm-kinako.com/
- バックエンドリポジトリ
  - https://github.com/Kazuya-Sakamoto/lgtm-kinako-api

## 環境

- node v20.12.2
- Nuxt v3.6.5
- vue v3.2.36
- pnpm v8.13.1
- TypeScript v5.2.2
- tailwind css v3.3.5
- storybook 7.6.17

## その他環境

- [Google Analytics](https://analytics.google.com/analytics/web/#/p287815666/reports/dashboard?params=_u..nav%3Dmaui&r=lifecycle-engagement-overview&ruid=lifecycle-engagement-overview,life-cycle,engagement&collectionId=life-cycle)
- [Search Console](https://search.google.com/search-console?resource_id=sc-domain%3Algtm-kinako.com)
- [Vercel](https://vercel.com/dashboard)
- [Heroicons](https://heroicons.com/)

## 環境構築

- コンテナ起動

```bash
$ make up
```

- 初期設定

```bash
$ make install
```

- 起動

```bash
$ make dev
```

- storybook の起動

```bash
$ make story
```

## Tips

- うまく起動しない時

```bash
$ make down
$ make up
$ make install
$ make dev
```
