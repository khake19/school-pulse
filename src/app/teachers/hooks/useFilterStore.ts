import { createFilterStore } from '~/helpers/createFilterStore'
import { IFilterStore as BaseFilterStore } from '~/helpers/filterSlice'

export interface IFilterStore {
  teachers: BaseFilterStore<{ search?: string; position?: string }>
}
// Usage with default values
const useFilterStore = createFilterStore<{ search?: string; position?: string }>({
  teachers: { search: '', position: '' }
})

export default useFilterStore
