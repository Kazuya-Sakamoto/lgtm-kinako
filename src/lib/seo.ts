export const common = {
  title: "LGTM-kinako",
  ogTitle: "LGTM-kinako",
};

export const setSeo = (pageTitle: string) => ({
  ...common,
  title: `LGTM-kinako ${pageTitle}`,
  ogTitle: `LGTM-kinako ${pageTitle}`,
});
