import { renderHook, waitFor } from '@testing-library/react'
import useGetTeacher from './useGetTeacher'
import wrapper from '~/utils/wrapper'

describe('Header', () => {
  it('displays the menu options', async () => {
    const { result } = await renderHook(() => useGetTeacher('schoolId', 'schoolId'), {
      wrapper: wrapper()
    })
    const { status } = result.current
    expect(status).toBe(true)

    waitFor(() => {
      const { status } = result.current
      expect(status).toBe(false)
    })
  })
})
