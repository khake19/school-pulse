import teacherService from '~/app/teachers/services/teacher.service'
import SelectForm from '~/components/Select/form/SelectForm'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import { Option } from '~/types/select'

const TeacherSelect = () => {
  const { handleScrollToBottom, fetchedData } = useInfiniteScroll(['teachers'], teacherService.allTeachers)

  const options: Option[] | undefined = fetchedData?.map((data) => ({
    label: data.first_name + ' ' + data.last_name,
    value: data.id
  }))

  return (
    <SelectForm
      options={options}
      name="teacherId"
      placeholder="Select a teacher"
      onMenuScrollToBottom={handleScrollToBottom}
    />
  )
}

export default TeacherSelect
