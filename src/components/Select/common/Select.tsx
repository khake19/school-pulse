import Select, { GroupBase, Props, StylesConfig } from 'react-select'
import { useToken } from '@chakra-ui/react'

const BasicSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: Props<Option, IsMulti, Group>
) => {
  const [brand300, black300] = useToken('colors', ['brand.300', 'black.300'])
  const [sm] = useToken('fontSizes', ['sm'])

  const colourStyles: StylesConfig<Option, IsMulti, Group> = {
    control: (baseStyles) => ({
      ...baseStyles,
      fontSize: sm
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      fontSize: sm,
      backgroundColor: isDisabled ? undefined : isSelected ? brand300 : isFocused ? brand300 : undefined,
      color: black300
    })
  }

  return <Select {...props} styles={colourStyles} isClearable={true} />
}

export default BasicSelect
