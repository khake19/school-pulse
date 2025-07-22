import { forwardRef, Ref } from 'react'
import { Option } from '~/types/select'

import useGetPositions from '../hooks/useGetPositions'
import SelectForm from '~/components/Select/form/SelectForm'

interface PositionSelectFormProps {
  name?: string
  placeholder?: string
  value?: string | number
  onChange?: (value: string | number) => void
  isDisabled?: boolean
  isClearable?: boolean
}

const PositionSelectForm = forwardRef<unknown, PositionSelectFormProps>(
  (
    {
      name = 'position',
      placeholder = 'Select a position',
      value,
      onChange,
      isDisabled = false,
      isClearable = true,
      ...props
    },
    ref
  ) => {
    const { positions = [] } = useGetPositions()
    const options: Option[] = positions.map((position) => ({
      label: position.name,
      value: position.id
    }))

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
)

PositionSelectForm.displayName = 'PositionSelectForm'

export default PositionSelectForm
