import { useMutation } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'
import { TTeacherFormInput } from '../types/teachers'
import { teacherCreateFormToPayload } from '../helpers/converter'

const useCreateTeacher = (options?: object) => {
  const { mutateAsync } = useMutation(({ id, data }: { id: string; data: TTeacherFormInput }) => {
    const payload = teacherCreateFormToPayload(data)
    return teacherService.createTeacher(id, payload)
  }, options)

  const alert = useAlert()
  const createTeacher = async (id: string, data: TTeacherFormInput) => {
    try {
      await mutateAsync({ id, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { createTeacher }
}

export default useCreateTeacher
