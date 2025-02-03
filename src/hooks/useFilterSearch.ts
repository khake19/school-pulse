import { useState } from 'react'

const useFilterSearch = () => {
  const [filterSearch, setFilterSearch] = useState('')

  const handleSearchValue = (value: string) => {
    setFilterSearch(value)
  }

  return { filterSearch, handleSearchValue }
}

export default useFilterSearch
