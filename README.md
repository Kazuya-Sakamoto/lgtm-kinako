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


## Overview

This is a service that allows you to share LGTM images featuring Kinako (my beloved dog). By clicking on an image, the corresponding Markdown code is copied, making it easy to use.

- 🌐 [service URL](https://lgtm-kinako.com/)  
- 🔧 [backend api repository](https://github.com/Kazuya-Sakamoto/lgtm-kinako-api)  

## Environment Setup

- Start the Container

```bash
$ make up
```

- Initial Setup

```bash
$ make install
```

- Start the Application

```bash
$ make dev
```

- Start Storybook

```bash
$ make story
```

## Tips

- If the Application Fails to Start

```bash
$ make down
$ make up
$ make install
$ make dev
```
