import { forwardRef } from 'react'
import teacherService from '~/app/teachers/services/teacher.service'
import SelectForm from '~/components/Select/form/SelectForm'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import { Option } from '~/types/select'
import CommonSelect from '~/components/Select/common/Select'

interface ITeacherSelectProps {
  isForm?: boolean
  isClearable?: boolean
  placeholder?: string
  name?: string
  value?: string | number
  onChange?: (value: string | number) => void
  isDisabled?: boolean
}

const TeacherSelect = forwardRef<unknown, ITeacherSelectProps>(
  (
    {
      isForm = true,
      isClearable = true,
      placeholder = 'Select a teacher',
      name = 'teacherId',
      value,
      onChange,
      isDisabled,
      ...props
    },
    ref
  ) => {
    const { handleScrollToBottom, fetchedData = [] } = useInfiniteScroll(
      ['teachers'],
      teacherService.allInfiniteTeachers
    )

    const options: Option[] = fetchedData?.map((data) => ({
      label: data.first_name + ' ' + data.last_name,
      value: data.id
    }))

    if (isForm) {
      return (
        <SelectForm
          options={options}
          name="teacherId"
          placeholder={placeholder}
          onMenuScrollToBottom={handleScrollToBottom}
          isClearable={isClearable}
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

TeacherSelect.displayName = 'TeacherSelect'
export default TeacherSelect
