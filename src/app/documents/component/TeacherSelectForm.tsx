import { forwardRef } from 'react'
import SelectForm from '~/components/Select/form/SelectForm'
import useTeacherOptions from '../hooks/useTeacherOptions'

interface Option {
  label: string
  value: string
}

interface ITeacherSelectFormProps {
  placeholder?: string
  name?: string
}

const TeacherSelectForm = forwardRef<unknown, ITeacherSelectFormProps>(
  ({ placeholder = 'Select a teacher', name = 'teacherId', ...props }, ref) => {
    const { options, handleScrollToBottom } = useTeacherOptions()

    return (
      <SelectForm
        options={options}
        name="teacherId"
        placeholder={placeholder}
        onMenuScrollToBottom={handleScrollToBottom}
      />
    )
  }
)

TeacherSelectForm.displayName = 'TeacherSelectForm'
export default TeacherSelectForm
