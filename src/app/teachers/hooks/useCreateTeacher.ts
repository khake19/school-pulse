import { useMutation } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import { TTeacherFormInput } from '../schema/teachers'
import useAlert from '~/hooks/useAlert'

const useCreateTeacher = (options?: object) => {
  const { mutateAsync } = useMutation(
    ({ id, data }: { id: string; data: TTeacherFormInput }) => teacherService.create(id, data),
    options
  )
  const alert = useAlert()

  const createTeacher = async (id: string, data: TTeacherFormInput) => {
    try {
      await mutateAsync({ id, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(error)
      }
    }
  }

  return { createTeacher }
}

export default useCreateTeacher
