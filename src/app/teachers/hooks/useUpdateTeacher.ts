import { useMutation } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import { TTeacherFormInput } from '../schema/teachers'
import useAlert from '~/hooks/useAlert'

interface IUpdateTeacherProps {
  schoolId: string
  teacherId: string
  data: TTeacherFormInput
}

const useUpdateTeacher = (options?: object) => {
  const { mutateAsync } = useMutation(
    ({ schoolId, teacherId, data }: IUpdateTeacherProps) => teacherService.update(schoolId, teacherId, data),
    options
  )
  const alert = useAlert()

  const updateTeacher = async (schoolId: string, teacherId: string, data: TTeacherFormInput) => {
    try {
      await mutateAsync({ schoolId, teacherId, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(error)
      }
    }
  }

  return { updateTeacher }
}

export default useUpdateTeacher
