import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLogin } from '../useLogin'

vi.mock('@/store/login', () => ({
  useLoginStore: vi.fn(() => ({
    onLoginStore: vi.fn(),
  })),
}))
vi.mock('@/lib/validation', () => ({
  checkEmailVal: vi.fn((email: string) => email.includes('@')),
  isPasswordLengthValid: vi.fn((password: string) => password.length >= 8),
}))

describe('useLogin', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('onInput', () => {
    it('入力の更新が正常にできる', () => {
      const { state, onInput } = useLogin()
      onInput({ name: 'email', value: 'test@example.com' })
      expect(state.input.email).toBe('test@example.com')
      onInput({ name: 'password', value: 'password123' })
      expect(state.input.password).toBe('password123')
    })
  })

  describe('valid', () => {
    it('入力値が有効の場合', () => {
      const { state, onInput, valid } = useLogin()
      onInput({ name: 'email', value: 'test@example.com' })
      onInput({ name: 'password', value: 'passwordOk' })

      expect(state.input.email).toBe('test@example.com')
      expect(state.input.password).toBe('passwordOk')
      expect(valid.value).toBe(true)
    })
    it('入力値が無効の場合', () => {
      const { state, onInput, valid } = useLogin()
      onInput({ name: 'email', value: 'fail-email' })
      onInput({ name: 'password', value: 'fail' })

      expect(state.input.email).toBe('fail-email')
      expect(state.input.password).toBe('fail')
      expect(valid.value).toBe(false)
    })
  })

  it('ダイアログの開閉が機能する', () => {
    const { state, onOpenDialog, onCloseDialog } = useLogin()
    onOpenDialog()
    expect(state.showDialog).toBe(true)
    onCloseDialog()
    expect(state.showDialog).toBe(false)
  })
})
