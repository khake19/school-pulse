import { createFilterStore } from '~/helpers/createFilterStore'
import { IFilterStore as BaseFilterStore } from '~/helpers/filterSlice'

export interface IFilterStore {
  teachers: BaseFilterStore<{ search: string }>
}
// Usage with default values
const useFilterStore = createFilterStore<{ search: string }>({
  teachers: { search: '' }
})

export default useFilterStore
