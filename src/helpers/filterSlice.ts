import { Lens } from '@dhmk/zustand-lens'

export interface IFilterStore<T> {
  filters: T | null
  setFilters: (filters: T) => void
  clearFilters: () => void
}

export const filterState =
  <T extends object>(defaultFilters: T): Lens<IFilterStore<T>> =>
  (set) => ({
    filters: defaultFilters,
    setFilters: (filters: T) => set((state) => (state.filters = filters)),
    clearFilters: () => set({ filters: defaultFilters })
  })
