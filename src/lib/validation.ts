const MIN_PASSWORD_LENGTH = 6

const checkEmailVal = (email: string) => {
  const regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return regex.test(email)
}

const isPasswordLengthValid = (input: string): boolean => {
  return input.length >= MIN_PASSWORD_LENGTH
}

export { checkEmailVal, isPasswordLengthValid }
