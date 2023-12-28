import Select, { Options } from 'react-select'
import { useFormContext, Controller } from 'react-hook-form'

interface Option {
  label: string
  value: string
}

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
        />
      )}
      name={name}
      control={control}
    />
  )
}

export default BasicSelect
