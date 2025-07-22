import { createFilterStore } from '~/helpers/createFilterStore'
import { IFilterStore as BaseFilterStore } from '~/helpers/filterSlice'

export interface IFilterProps {
  search?: string
  positions?: string[]
}

export interface IFilterStore {
  teachers: BaseFilterStore<IFilterProps>
}
// Usage with default values
const useFilterStore = createFilterStore<IFilterProps>({
  teachers: { search: '', positions: [] }
})

export default useFilterStore
