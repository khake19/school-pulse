import { renderHook, act } from '@testing-library/react'
import useCurrentSchoolStore from './useCurrentSchool'

test('current school store', () => {
  const { result } = renderHook(() => useCurrentSchoolStore())
  expect(result.current.school).toStrictEqual({ id: '', name: '' })

  act(() => result.current.setSchool({ id: '1', name: 'Aroroy East Central School' }))

  expect(result.current.school).toStrictEqual({ id: '1', name: 'Aroroy East Central School' })
})
