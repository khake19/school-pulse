import { createFilterStore } from '~/helpers/createFilterStore'
import { IFilterStore as BaseFilterStore } from '~/helpers/filterSlice'

export interface IFilterProps {
  teachers?: string[]
}
export interface IFilterStore {
  documents: BaseFilterStore<IFilterProps>
}
// Usage with default values
const useFilterStore = createFilterStore<IFilterProps>({
  documents: { teachers: [] }
})

export default useFilterStore
