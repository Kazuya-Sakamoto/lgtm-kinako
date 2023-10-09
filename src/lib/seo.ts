export const common = {
  title: "LGTM-kinako",
  ogTitle: "LGTM-kinako",
  ogImage: "https://d18g0hf2wnz3gs.cloudfront.net/favicon.jpg",
};

export const setSeo = (pageTitle: string) => ({
  ...common,
  title: `LGTM-kinako ${pageTitle}`,
  ogTitle: `LGTM-kinako ${pageTitle}`,
  description:
    "LGTM-kinakoは、きなこ、犬、わんこ、わんちゃん のLGTM画像を自由にダウンロードして使用できるサービスです。GitHubでプルリクエストをレビューした際に Looks Good To Me の略で LGTM と書くことがあります。この LGTM 画像にきなこの画像を使ってみてください。LGTM-kinakoは、様々なエンジニアたちがLGTMを送り合うことができます。",
});
