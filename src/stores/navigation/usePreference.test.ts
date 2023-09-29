import { renderHook, act } from '@testing-library/react'
import usePreference from './usePreference'

describe('preference store', () => {
  it('should open sidebar', () => {
    const { result } = renderHook(() => usePreference())
    expect(result.current.isSidebarOpen).toStrictEqual(false)

    act(() => result.current.setSideBarOpen(true))

    expect(result.current.isSidebarOpen).toStrictEqual(true)
  })
})
