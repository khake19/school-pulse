import { lens, withLenses, LensOpaqueType } from '@dhmk/zustand-lens'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { filterState, IFilterStore } from './filterSlice'
import merge from 'lodash/merge'

// Factory function with default values
export const createFilterStore = <T extends object>(filterConfig: Record<string, T>) => {
  const filterLenses = Object.keys(filterConfig).reduce(
    (acc: Record<string, LensOpaqueType<IFilterStore<T>, unknown>>, key: string) => {
      acc[key] = lens(filterState(filterConfig[key]))
      return acc
    },
    {}
  )

  return create(
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
