import { forwardRef, Ref } from 'react'
import { Option } from '~/types/select'

import useGetPositions from '../../hooks/useGetPositions'
import SelectForm from '~/components/Select/form/SelectForm'
import CommonSelect from '~/components/Select/common/Select'

interface PositionSelectProps {
  name?: string
  placeholder?: string
  value?: string | number
  onChange?: (value: string | number) => void
  isForm?: boolean
  isDisabled?: boolean
  isClearable?: boolean
}

const PositionSelect = forwardRef<unknown, PositionSelectProps>(
  (
    {
      name = 'position',
      placeholder = 'Select a position',
      value,
      onChange,
      isForm = true,
      isDisabled = false,
      isClearable = false,
      ...props
    },
    ref
  ) => {
    const { positions = [] } = useGetPositions()
    const options: Option[] = positions.map((position) => ({
      label: position.name,
      value: position.id
    }))

    if (isForm) {
      return (
        <SelectForm
          options={options}
          name={name}
          placeholder={placeholder}
          isDisabled={isDisabled}
          isClearable={isClearable}
          {...props}
        />
      )
    }

    return (
      <CommonSelect
        ref={ref}
        options={options}
        placeholder={placeholder}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption: Option | null) => onChange?.(selectedOption?.value || '')}
        isDisabled={isDisabled}
        isClearable={isClearable}
        {...props}
      />
    )
  }
)

PositionSelect.displayName = 'PositionSelect'

export default PositionSelect
