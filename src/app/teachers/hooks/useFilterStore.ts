import { createFilterStore } from '~/helpers/createFilterStore'
import { IFilterStore as BaseFilterStore } from '~/helpers/filterSlice'

export interface IFilterStore {
  teachers: BaseFilterStore<{ search: string; position: number }>
}
// Usage with default values
const useFilterStore = createFilterStore<{ search: string; position: number }>({
  teachers: { search: '', position: 1 }
})

export default useFilterStore
