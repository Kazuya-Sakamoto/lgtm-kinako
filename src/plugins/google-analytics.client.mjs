// plugins/google-analytics.client.mjs

import { createGtag } from "vue-gtag";

export default ({ app }) => {
  // ルーター取得
  const router = app.router;

  // Google Analyticsの初期化
  const gtag = createGtag({
    property: {
      pageTrackerScreenviewEnabled: true,
      id: "G-TJ0G7F77QG", // ここにGoogle Analytics(GA4)の測定IDを指定する
    },
  });

  // プラグインの適用
  app.use(gtag, router);
};
