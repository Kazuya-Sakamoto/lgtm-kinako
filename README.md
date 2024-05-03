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

## その他ドキュメント

- [デザインガイドライン](https://www.figma.com/file/Pwurnd9pB47iZ5bz5ymSwF/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3?type=design&node-id=0%3A1&mode=design&t=u7mjAVbFFh4hk2RT-1)

<img width="1007" alt="スクリーンショット 2024-02-14 20 48 21" src="https://github.com/Kazuya-Sakamoto/lgtm-kinako/assets/56709557/92ace0f6-2149-4300-afec-990d025d7627">
