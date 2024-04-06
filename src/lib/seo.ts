const common = {
  title: 'LGTM-kinako',
  ogTitle: 'LGTM-kinako',
}

const setSeo = (pageTitle: string) => ({
  ...common,
  title: `LGTM-kinako | ${pageTitle}`,
  ogTitle: `LGTM-kinako | ${pageTitle}`,
})

export { setSeo }
