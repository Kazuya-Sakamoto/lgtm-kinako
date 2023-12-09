const common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Connection: 'keep-alive',
}

const h = (csrfToken?: string) => {
  return csrfToken
    ? {
        ...common,
        'X-CSRF-Token': csrfToken,
      }
    : common
}

export { h }
