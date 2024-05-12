import { describe, test, expect } from 'vitest'
import { checkEmailVal, isPasswordLengthValid } from './validation'

describe('checkEmailVal', () => {
  test('正常なEmailを入力', () => {
    const validEmail = 'example@example.com'
    expect(checkEmailVal(validEmail)).toBe(true)
  })

  test('Emailの形式エラー', () => {
    const invalidEmail = 'example.com'
    expect(checkEmailVal(invalidEmail)).toBe(false)
  })
})

describe('isPasswordLengthValid', () => {
  test('パスワードが規定の長さ', () => {
    const validPassword = '123456'
    expect(isPasswordLengthValid(validPassword)).toBe(true)
  })

  test('パスワードが長さが足りない', () => {
    const invalidPassword = '123'
    expect(isPasswordLengthValid(invalidPassword)).toBe(false)
  })
})
