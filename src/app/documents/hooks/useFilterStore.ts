import { createFilterStore } from '~/helpers/createFilterStore'
import { IFilterStore as BaseFilterStore } from '~/helpers/filterSlice'

export interface IFilterProps {
  teacherId?: string
}
export interface IFilterStore {
  documents: BaseFilterStore<IFilterProps>
}
// Usage with default values
const useFilterStore = createFilterStore<IFilterProps>({
  documents: { teacherId: '' }
})

export default useFilterStore
