import { forwardRef, Ref } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Select from '~/components/Select'
import { Option } from '~/types/select'

interface SelectFormProps {
  options: Option[]
  name: string
  placeholder?: string
  isDisabled?: boolean
  isSearchable?: boolean
  isClearable?: boolean
  onMenuScrollToBottom?: () => void
}

const SelectForm = forwardRef<HTMLInputElement, SelectFormProps>((props, ref) => {
  const { options, name, ...selectProps } = props
  const { control } = useFormContext()

  return (
    <Controller
      render={({ field }) => {
        const selectedOption = options?.find((option) => option.value === field.value) || null

        return (
          <Select
            {...selectProps}
            ref={ref}
            name={name}
            options={options}
            value={selectedOption}
            onChange={(selectedOption: Option | null) => {
              field.onChange(selectedOption?.value || '')
            }}
          />
        )
      }}
      name={name}
      control={control}
    />
  )
})

SelectForm.displayName = 'SelectForm'

export default SelectForm
