import Select, { GroupBase, Props, StylesConfig } from 'react-select'
import { useFormContext, Controller } from 'react-hook-form'
import { useToken } from '@chakra-ui/react'

const BasicSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: Props<Option, IsMulti, Group>
) => {
  const { control, watch } = useFormContext()
  const [teal300, black300] = useToken('colors', ['teal.300', 'black.300'])
  const [sm] = useToken('fontSizes', ['sm'])

  const selectedValue = watch(props.name)
  const selectedOption = props.options?.filter((option: Props) => option.value === selectedValue)

  const colourStyles: StylesConfig<Option> = {
    control: (baseStyles) => ({
      ...baseStyles,
      fontSize: sm
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      fontSize: sm,
      backgroundColor: isDisabled ? undefined : isSelected ? teal300 : isFocused ? teal300 : undefined,
      color: black300
    })
  }

  return (
    <Controller
      render={({ field }) => (
        <Select
          {...field}
          {...props}
          styles={colourStyles}
          value={selectedOption || null}
          onChange={(selectedOption: Props) => field.onChange(selectedOption?.value)}
        />
      )}
      name={props.name}
      control={control}
    />
  )
}

export default BasicSelect
