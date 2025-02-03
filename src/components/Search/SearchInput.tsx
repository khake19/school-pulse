import { useEffect, useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { HStack, Input, InputProps } from '@chakra-ui/react'
import { useDebounce } from 'use-debounce'

import { InputGroup } from '../ui/input-group'

interface ISearchInputProps extends InputProps {
  handleSearchValue: (value: string) => void
}

const SearchInput = (props: ISearchInputProps) => {
  const { placeholder = 'Search ', handleSearchValue, width = 'full' } = props
  const [text, setText] = useState('')
  const [value] = useDebounce(text, 1000)

  // Call handleDebounceValue only when value changes
  useEffect(() => {
    if (handleSearchValue) {
      handleSearchValue(value)
    }
  }, [value, handleSearchValue])

  return (
    <HStack gap="10" width={width}>
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          borderColor="gray.500"
          placeholder={placeholder}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </InputGroup>
    </HStack>
  )
}

export default SearchInput
