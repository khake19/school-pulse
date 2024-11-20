import Select, { ActionMeta, GroupBase, Props, StylesConfig } from 'react-select'
import { useFormContext, Controller } from 'react-hook-form'
import { useToken } from '@chakra-ui/react'
import { Option } from '~/types/select'

const BasicSelect = <IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: Props<Option, IsMulti, Group>
) => {
  const { control } = useFormContext()
  const [teal300, black300] = useToken('colors', ['teal.300', 'black.300'])
  const [sm] = useToken('fontSizes', ['sm'])

  const colourStyles: StylesConfig<Option, IsMulti, Group> = {
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
          value={props.options?.filter((option:  Option) => option.value === field.value)}
          onChange={(selectedOption: Option | null, actionMeta: ActionMeta<Option>) => field.onChange(selectedOption?.value)}
        />
      )}
      name={props.name}
      control={control}
    />
  )
}

export default BasicSelect
