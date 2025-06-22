import { lens, withLenses } from '@dhmk/zustand-lens'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { filterState } from './filterSlice'
import merge from 'lodash/merge'

// Factory function with default values
export const createFilterStore = <T extends object>(filterConfig: Record<string, T>) => {
  const filterLenses = Object.keys(filterConfig).reduce<Record<string, unknown>>((acc, key) => {
    acc[key] = lens(filterState(filterConfig[key]))
    return acc
  }, {})

  type State = {
    [key: string]: any
  }

  return create<State, [['zustand/devtools', never], ['zustand/persist', { filters: T }], ['zustand/immer', never]]>(
    devtools(
      persist(immer(withLenses(() => filterLenses)), {
        name: 'filter-storage',
        version: 1,
        // this will make sure function calls ex: (setFilters, clearFilters) are not lost
        merge: (persistedState, currentState) => merge(currentState, persistedState)
      })
    )
  )
}
