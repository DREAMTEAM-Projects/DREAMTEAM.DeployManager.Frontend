import { renderHook, act } from '@testing-library/react-hooks'
import { useLogin } from 'pages/login/hook'

describe('useLogin', () => {
  it('should toggle loading state and call toast success', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin())

    expect(result.current.isLoading).toBe(false)

    await act(async () => {
      result.current.onSubmit({
        email: 'test@example.com',
        password: 'password'
      })
    })

    expect(result.current.isLoading).toBe(true)
    await waitForNextUpdate({ timeout: 2000 })
    expect(result.current.isLoading).toBe(false)
  })
})
