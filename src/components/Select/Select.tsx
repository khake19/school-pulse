import Select, { Options } from 'react-select'
import { useFormContext, Controller } from 'react-hook-form'

import { Option } from '~/types/select'

interface IBasicSelectProps {
  placeholder?: string
  options: Options<Option>
  name: string
}

const BasicSelect = (props: IBasicSelectProps) => {
  const { placeholder, options, name } = props

  const { control } = useFormContext()

  return (
    <Controller
      render={({ field }) => (
        <Select
          {...field}
          placeholder={placeholder}
          options={options}
          value={options.find((c) => c.value === field.value)}
          onChange={(val) => field.onChange(val?.value)}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: '10px'
            }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
              ...styles,
              fontSize: '10px',
              backgroundColor: isDisabled ? undefined : isSelected ? '#38B2AC' : isFocused ? '#38B2AC' : undefined,
              color: isDisabled ? '#ccc' : isSelected ? 'white' : 'black'
            })
          }}
        />
      )}
      name={name}
      control={control}
    />
  )
}

export default BasicSelect
