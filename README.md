<img src="https://d18g0hf2wnz3gs.cloudfront.net/20240413001214.JPG" alt="LGTM Image" width="830">


# lgtm-kinako

<div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center; margin-bottom: 20px;">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Node.js-v20.12.2-brightgreen" alt="Node.js">
  <img src="https://img.shields.io/badge/Nuxt-v3.6.5-green" alt="Nuxt">
  <img src="https://img.shields.io/badge/Vue.js-v3.2.36-brightgreen" alt="Vue.js">
  <img src="https://img.shields.io/badge/pnpm-v8.13.1-orange" alt="pnpm">
  <img src="https://img.shields.io/badge/TypeScript-v5.2.2-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-v3.3.5-38B2AC" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Storybook-v7.6.17-FF4785" alt="Storybook">
</div>

<br/>

<div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
  <img src="https://img.shields.io/badge/Google%20Analytics-Dashboard-blue?logo=google-analytics&logoColor=white" alt="Google Analytics">
  <img src="https://img.shields.io/badge/Search%20Console-Website-blue?logo=google-search-console&logoColor=white" alt="Search Console">
  <img src="https://img.shields.io/badge/Vercel-Dashboard-black?logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Heroicons-Icons-blueviolet?logo=heroicons&logoColor=white" alt="Heroicons">
</div>


## 概要

きなこ（愛犬）の LGTM 画像を共有出来るサービスです。画像をクリックすると Markdown がコピーされ使用することができます。

- 🌐 [サービス URL](https://lgtm-kinako.com/)  
- 🔧 [バックエンドリポジトリ](https://github.com/Kazuya-Sakamoto/lgtm-kinako-api)  

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
