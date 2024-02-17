import { reactive, computed } from 'vue'
import { useLoginStore } from '@/store/login'
import { LoginParams } from '@/hooks/types'
import { checkEmailVal, isPasswordLengthValid } from '@/lib/validation'

type State = {
  showDialog: boolean
  input: {
    email: string
    password: string
  }
  loading: boolean
}
const initialState = (): State => ({
  showDialog: false,
  input: {
    email: '',
    password: '',
  },
  loading: false,
})

export const useLogin = () => {
  const loginStore = useLoginStore()
  const { onLoginStore } = loginStore
  const state = reactive<State>(initialState())

  const onInput = (item: { name: keyof LoginParams; value: string }) => {
    state.input = {
      ...state.input,
      [item.name]: item.value,
    }
  }

  const valid = computed(() => {
    return (
      state.input.email.trim() !== '' &&
      checkEmailVal(state.input.email) &&
      state.input.password.trim() !== '' &&
      isPasswordLengthValid(state.input.password)
    )
  })

  const onLogin = async () => {
    state.loading = true
    try {
      await onLoginStore({
        email: state.input.email,
        password: state.input.password,
      })
    } catch (error) {
      console.error(error)
      alert(`エラーが発生しました。${error}`)
    } finally {
      state.showDialog = false
      state.loading = false
    }
  }

  return {
    state,
    onInput,
    valid,
    onLogin,
    onOpenDialog: () => (state.showDialog = true),
    onCloseDialog: () => (state.showDialog = false),
  }
}
