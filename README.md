<img src="https://d18g0hf2wnz3gs.cloudfront.net/20240413001214.JPG" alt="LGTM Image" width="830">


# lgtm-kinako

<div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center; margin-bottom: 20px;">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-v20.12.2-brightgreen" alt="Node.js">
  </a>
  <a href="https://nuxt.com/">
    <img src="https://img.shields.io/badge/Nuxt-v3.6.5-green" alt="Nuxt">
  </a>
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/Vue.js-v3.2.36-brightgreen" alt="Vue.js">
  </a>
  <a href="https://pnpm.io/">
    <img src="https://img.shields.io/badge/pnpm-v8.13.1-orange" alt="pnpm">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-v5.2.2-blue" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/TailwindCSS-v3.3.5-38B2AC" alt="Tailwind CSS">
  </a>
  <a href="https://storybook.js.org/">
    <img src="https://img.shields.io/badge/Storybook-v7.6.17-FF4785" alt="Storybook">
  </a>
</div>

<br/>

<div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
  <a href="https://analytics.google.com/analytics/web/#/p287815666/reports/dashboard?params=_u..nav%3Dmaui&r=lifecycle-engagement-overview&ruid=lifecycle-engagement-overview,life-cycle,engagement&collectionId=life-cycle" target="_blank">
    <img src="https://img.shields.io/badge/Google%20Analytics-Dashboard-blue?logo=google-analytics&logoColor=white" alt="Google Analytics">
  </a>
  <a href="https://search.google.com/search-console?resource_id=sc-domain%3Algtm-kinako.com" target="_blank">
    <img src="https://img.shields.io/badge/Search%20Console-Website-blue?logo=google-search-console&logoColor=white" alt="Search Console">
  </a>
  <a href="https://vercel.com/dashboard" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-Dashboard-black?logo=vercel&logoColor=white" alt="Vercel">
  </a>
  <a href="https://heroicons.com/" target="_blank">
    <img src="https://img.shields.io/badge/Heroicons-Icons-blueviolet?logo=heroicons&logoColor=white" alt="Heroicons">
  </a>
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
