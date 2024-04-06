import { useMutation } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import useAlert from '~/hooks/useAlert'

const useDeleteTeacher = (options?: object) => {
  const { mutateAsync } = useMutation(
    ({ schoolId, teacherId }: { schoolId: string; teacherId: string }) =>
      teacherService.removeTeacher(schoolId, teacherId),
    options
  )
  const alert = useAlert()

  const deleteTeacher = async (schoolId: string, teacherId: string) => {
    try {
      await mutateAsync({ schoolId, teacherId })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(error)
      }
    }
  }

  return { deleteTeacher }
}

export default useDeleteTeacher
