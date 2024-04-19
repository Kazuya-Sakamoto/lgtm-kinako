import { describe, test, expect } from 'vitest'
import { h } from '../headers'

describe('h', () => {
  test('defaultのhedaers', () => {
    const expectedHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Connection: 'keep-alive',
    }
    expect(h()).toEqual(expectedHeaders)
  })

  test('CSRFtoken', () => {
    const csrfToken = 'test_token'
    const expectedHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Connection: 'keep-alive',
      'X-CSRF-Token': csrfToken,
    }
    expect(h(csrfToken)).toEqual(expectedHeaders)
  })
})
