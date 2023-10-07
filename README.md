# lgtm-kinako
## 概要
きなこのLGTM画像を共有出来るサービスです。画像をクリックするとMarkdownがコピーされ使用することができます。

- サービスURL
  - https://lgtm-kinako.com/
- バックエンドリポジトリ
  - https://github.com/Kazuya-Sakamoto/lgtm-kinako-api
  
## 使用パッケージ
- Node.js v18.18.0
- Nuxt.js v3.6.5

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
### icon
- [Heroicons](https://heroicons.com/)
