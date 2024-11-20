import { Options } from 'react-select'
import teacherService from '~/app/teachers/services/teacher.service'
import Select from '~/components/Select'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import { Option } from '~/types/select'

const TeacherSelect = () => {
  const { handleScrollToBottom, fetchedData } = useInfiniteScroll(['teachers'], teacherService.allTeachers)

  const options: Option[] | undefined = fetchedData?.map((data) => ({ label: data.first_name + ' ' + data.last_name, value: data.id }))

  return (
    <Select
      options={options}
      name="teacherId"
      placeholder="Select a teacher"
      onMenuScrollToBottom={handleScrollToBottom}
    />
  )
}

export default TeacherSelect
