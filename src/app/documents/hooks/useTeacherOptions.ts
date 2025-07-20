import teacherService from '~/app/teachers/services/teacher.service'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'

const useTeacherOptions = () => {
  const { handleScrollToBottom, fetchedData = [] } = useInfiniteScroll(['teachers'], teacherService.allInfiniteTeachers)

  const options = fetchedData.map((data) => ({
    label: `${data.first_name} ${data.last_name}`,
    value: String(data.id)
  }))

  return { options, handleScrollToBottom }
}

export default useTeacherOptions
