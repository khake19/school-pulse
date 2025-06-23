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
    setFilters: (filters: T) =>
      set((state) => ({
        filters: { ...state.filters, ...filters }
      })),
    clearFilters: () => set({ filters: defaultFilters }),
    setFilter: (key: keyof T, value: T[keyof T]) =>
      set((state) => {
        if (state.filters) {
          state.filters[key] = value
        }
      }),
    hasActiveFilters: () => {
      return Object.values(defaultFilters).some((value) => value !== undefined && value !== null && value !== '')
    },
    getActiveFilters: () => {
      return Object.fromEntries(
        Object.entries(defaultFilters).filter(([_, value]) => value !== undefined && value !== null && value !== '')
      )
    }
  })
