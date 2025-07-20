import MultiSelect from '~/components/Select/common/MultiSelect'
import useTeacherOptions from '../hooks/useTeacherOptions'

interface Option {
  label: string
  value: string
}

interface ITeacherSelectFilterProps {
  placeholder?: string
  name?: string
  selectedTeacherIds?: string[]
  onChange: (value: Option[]) => void
}

const TeacherSelectFilter = ({
  placeholder = 'Select a teacher',
  name = 'teacherId',
  selectedTeacherIds,
  onChange,
  ...props
}: ITeacherSelectFilterProps) => {
  const { options } = useTeacherOptions()

  return (
    <MultiSelect
      key={options.map((o) => o.value).join(',')}
      options={options ?? []}
      placeholder={placeholder}
      selectedValues={selectedTeacherIds ?? []}
      onChange={(selectedOptions: Option[]) => onChange(selectedOptions)}
      {...props}
    />
  )
}

TeacherSelectFilter.displayName = 'TeacherSelectFilter'
export default TeacherSelectFilter
