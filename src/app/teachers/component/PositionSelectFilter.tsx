import useGetPositions from '../hooks/useGetPositions'
import MultiSelect from '~/components/Select/common/MultiSelect'

interface Option {
  label: string
  value: string
}

interface PositionSelectProps {
  name?: string
  placeholder?: string
  value?: string | number
  onChange: (value: Option[]) => void
  selectedPositionIds: string[]
}

const PositionSelectFilter = ({
  name = 'position',
  placeholder = 'Select a position',
  value,
  onChange,
  selectedPositionIds,
  ...props
}: PositionSelectProps) => {
  const { positions = [] } = useGetPositions()

  const options: Option[] = positions.map((position) => ({
    label: position.name,
    value: String(position.id)
  }))

  return (
    <MultiSelect
      key={options.map((o) => o.value).join(',')}
      options={options ?? []}
      placeholder={placeholder}
      selectedValues={selectedPositionIds ?? []}
      onChange={(selectedOptions: Option[]) => onChange(selectedOptions)}
      {...props}
    />
  )
}

PositionSelectFilter.displayName = 'PositionSelectFilter'

export default PositionSelectFilter
