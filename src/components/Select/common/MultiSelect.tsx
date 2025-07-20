import React, { useRef } from 'react'
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import { useCombobox, useMultipleSelection } from 'downshift'

interface Option {
  label: string
  value: string
}

interface IBasicSelectProps {
  options: Option[]
  placeholder?: string
  onChange: (options: Option[]) => void
  selectedValues: string[]
}

const MultiSelect = (props: IBasicSelectProps) => {
  const { options, placeholder, onChange, selectedValues } = props

  const getFilteredOptions = (selectedItems: Option[], inputValue: string) => {
    const lowerCasedInputValue = inputValue.toLowerCase()
    return options.filter((option: Option) => {
      return (
        !selectedItems.some((item: Option) => item.value === option.value) &&
        option.label.toLowerCase().includes(lowerCasedInputValue)
      )
    })
  }

  const [inputValue, setInputValue] = React.useState('')
  const [selectedItems, setSelectedItems] = React.useState<Option[]>(
    options.filter((option) => selectedValues.includes(option.value))
  )

  const items: Option[] = React.useMemo(
    () => getFilteredOptions(selectedItems, inputValue),
    [selectedItems, inputValue]
  )

  const inputRef = useRef<HTMLInputElement>(null)

  const { getSelectedItemProps, getDropdownProps, removeSelectedItem } = useMultipleSelection<Option>({
    selectedItems,
    onStateChange({ selectedItems: newSelectedItems, type }) {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          if (newSelectedItems) setSelectedItems(newSelectedItems)
          break
        default:
          break
      }
    }
  })
  const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } =
    useCombobox<Option>({
      items,
      itemToString(item) {
        return item ? item.label : ''
      },
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      selectedItem: null,
      inputValue,
      stateReducer(state, actionAndChanges) {
        const { changes, type } = actionAndChanges
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
              highlightedIndex: 0 // with the first option highlighted.
            }
          default:
            return changes
        }
      },
      onStateChange({ inputValue: newInputValue, type, selectedItem: newSelectedItem }) {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (newSelectedItem) {
              setSelectedItems([...selectedItems, newSelectedItem])
              setInputValue('')
              onChange([...selectedItems, newSelectedItem])
            }
            break
          case useCombobox.stateChangeTypes.InputChange:
            if (typeof newInputValue === 'string') {
              setInputValue(newInputValue)
            }
            break
          default:
            break
        }
      }
    })

  return (
    <Box w="592px">
      <Flex direction="column" gap={1}>
        <Flex
          bg="white"
          gap={2}
          align="center"
          flexWrap="wrap"
          p={1}
          borderRadius="md"
          borderWidth="1px"
          minH="40px"
          borderColor="gray.200"
          onClick={() => inputRef.current?.focus()}
          cursor="text"
          position="relative"
          transition="box-shadow 0.2s, border-color 0.2s"
        >
          {selectedItems.map((selectedItemForRender: Option, index: number) => (
            <Flex
              key={`selected-item-${selectedItemForRender.value}`}
              align="center"
              bg="gray.100"
              borderRadius="md"
              px={1}
              py={0.5}
              mr={1}
              mb={0}
              minH="28px"
              h="28px"
              fontSize="sm"
              {...getSelectedItemProps({
                selectedItem: selectedItemForRender,
                index
              })}
            >
              <Text mr={1} fontSize="sm">
                {selectedItemForRender.label}
              </Text>
              <Button
                size="xs"
                variant="ghost"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  removeSelectedItem(selectedItemForRender)
                  onChange(selectedItems.filter((item) => item.value !== selectedItemForRender.value))
                }}
                aria-label="Remove"
                px={1}
                h="20px"
                minW="20px"
                fontSize="xs"
              >
                ×
              </Button>
            </Flex>
          ))}
          {selectedItems.length > 0 && (
            <Button
              size="xs"
              variant="ghost"
              fontSize="sm"
              colorScheme="red"
              ml={1}
              onClick={() => {
                setSelectedItems([])
                onChange([])
              }}
            >
              Clear All
            </Button>
          )}
          <Input
            ref={inputRef}
            placeholder={selectedItems.length > 0 ? '' : placeholder}
            flex="1"
            minW="80px"
            h="28px"
            fontSize="sm"
            border="none"
            borderWidth={0}
            outline="none"
            boxShadow="none"
            bg="transparent"
            _focus={{ border: 'none', boxShadow: 'none', outline: 'none' }}
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
          />
          <Button
            aria-label="toggle menu"
            px={2}
            type="button"
            {...getToggleButtonProps()}
            variant="ghost"
            minW="unset"
            h="28px"
            fontSize="sm"
          >
            &#8595;
          </Button>
        </Flex>
      </Flex>
      <Box
        as="ul"
        position="absolute"
        w="inherit"
        bg="white"
        mt={1}
        boxShadow="md"
        maxH="80"
        overflowY="scroll"
        p={0}
        zIndex={10}
        display={isOpen && items.length ? 'block' : 'none'}
        style={{ listStyle: 'none' }}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item: Option, index: number) => (
            <Box
              as="li"
              key={item.value}
              px={2}
              py={1}
              fontSize="sm"
              cursor="pointer"
              bg={highlightedIndex === index ? 'gray.100' : 'white'}
              {...getItemProps({ item, index })}
            >
              <Text fontSize="md">{item.label}</Text>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default MultiSelect
