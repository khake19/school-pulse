import React, { forwardRef } from 'react'
import { Box, Flex, Input, Button, Text, useToken } from '@chakra-ui/react'
import { useCombobox } from 'downshift'
import { Option } from '~/types/select'

interface BasicSelectProps {
  options: Option[]
  value?: Option | Option[] | null
  onChange?: (selectedOption: Option | null) => void
  placeholder?: string
  isDisabled?: boolean
  isSearchable?: boolean
  isClearable?: boolean
  name?: string
  onMenuScrollToBottom?: () => void
}

const BasicSelect = forwardRef<HTMLInputElement, BasicSelectProps>((props, ref) => {
  const {
    options,
    value,
    onChange,
    placeholder = 'Select...',
    isDisabled = false,
    isSearchable = true,
    isClearable = true,
    name,
    onMenuScrollToBottom
  } = props

  const [brand300, black300] = useToken('colors', ['brand.300', 'black.300'])
  const [sm] = useToken('fontSizes', ['sm'])

  // Handle both single Option and array of Options (for compatibility with react-select)
  const selectedOption = Array.isArray(value) ? value[0] || null : value || null

  const [inputValue, setInputValue] = React.useState('')

  const getFilteredOptions = (inputValue: string) => {
    if (!isSearchable || !inputValue) return options
    const lowerCasedInputValue = inputValue.toLowerCase()
    return options.filter((option) => option.label.toLowerCase().includes(lowerCasedInputValue))
  }

  const items = getFilteredOptions(inputValue)

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    selectedItem,
    reset
  } = useCombobox<Option>({
    items,
    selectedItem: selectedOption,
    itemToString(item) {
      return item ? item.label : ''
    },
    onInputValueChange({ inputValue: newInputValue }) {
      if (isSearchable) {
        setInputValue(newInputValue || '')
      }
    },
    onSelectedItemChange({ selectedItem: newSelectedItem }) {
      onChange?.(newSelectedItem || null)
      if (!isSearchable && newSelectedItem) {
        setInputValue(newSelectedItem.label)
      }
    }
  })

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    reset()
    setInputValue('')
    onChange?.(null)
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    if (onMenuScrollToBottom && target.scrollTop + target.clientHeight >= target.scrollHeight - 5) {
      onMenuScrollToBottom()
    }
  }

  const displayValue = selectedItem ? selectedItem.label : ''
  const showClearButton = isClearable && selectedItem && !isDisabled

  return (
    <Box position="relative" width="100%">
      <Flex
        bg="white"
        align="center"
        borderRadius="md"
        borderWidth="1px"
        borderColor="gray.200"
        minH="38px"
        px={3}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        opacity={isDisabled ? 0.6 : 1}
        _hover={!isDisabled ? { borderColor: 'gray.300' } : {}}
        _focusWithin={!isDisabled ? { borderColor: brand300, boxShadow: `0 0 0 1px ${brand300}` } : {}}
      >
        <Box flex="1" position="relative">
          {isSearchable ? (
            <Input
              {...getInputProps({
                ref,
                name,
                disabled: isDisabled,
                placeholder: selectedItem ? '' : placeholder
              })}
              border="none"
              p={0}
              fontSize={sm}
              color={black300}
              _focus={{ boxShadow: 'none' }}
              _disabled={{ cursor: 'not-allowed' }}
            />
          ) : (
            <Text
              fontSize={sm}
              color={displayValue ? black300 : 'gray.400'}
              cursor={isDisabled ? 'not-allowed' : 'pointer'}
              py="8px"
              onClick={!isDisabled ? getToggleButtonProps().onClick : undefined}
            >
              {displayValue || placeholder}
            </Text>
          )}
          {!isSearchable && selectedItem && (
            <input
              ref={ref}
              name={name}
              value={selectedItem.value}
              onChange={() => {
                // controlled by Downshift
              }}
              style={{ display: 'none' }}
            />
          )}
        </Box>

        <Flex align="center" gap={1}>
          {showClearButton && (
            <Button
              size="xs"
              variant="ghost"
              onClick={handleClear}
              aria-label="Clear selection"
              px={1}
              h="20px"
              minW="20px"
              fontSize="sm"
              color="gray.500"
              _hover={{ color: 'gray.700' }}
            >
              ×
            </Button>
          )}
          <Button
            {...getToggleButtonProps({
              disabled: isDisabled
            })}
            size="xs"
            variant="ghost"
            aria-label="Toggle menu"
            px={1}
            h="20px"
            minW="20px"
            fontSize="sm"
            color="gray.500"
          >
            ▼
          </Button>
        </Flex>
      </Flex>

      <Box
        {...getMenuProps()}
        position="absolute"
        top="100%"
        left={0}
        right={0}
        bg="white"
        mt={1}
        boxShadow="lg"
        borderRadius="md"
        maxH="200px"
        overflowY="auto"
        zIndex={1000}
        display={isOpen && items.length ? 'block' : 'none'}
        borderWidth="1px"
        borderColor="gray.200"
        onScroll={handleScroll}
      >
        {isOpen &&
          items.map((item, index) => (
            <Box
              key={item.value}
              {...getItemProps({ item, index })}
              px={3}
              py={2}
              fontSize={sm}
              color={black300}
              cursor="pointer"
              bg={highlightedIndex === index ? brand300 : 'white'}
              _hover={{ bg: brand300 }}
            >
              {item.label}
            </Box>
          ))}
      </Box>
    </Box>
  )
})

BasicSelect.displayName = 'BasicSelect'

export default BasicSelect
