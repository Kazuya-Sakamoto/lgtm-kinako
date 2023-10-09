export const checkEmailVal = (email: string) => {
  const regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
};

export const isPasswordLengthValid = (input: string): boolean => {
  return input.length >= 6;
};
