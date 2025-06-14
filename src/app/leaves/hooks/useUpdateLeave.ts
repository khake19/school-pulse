import { useMutation } from '@tanstack/react-query'
import { TLeaveFormInput, TUpdateLeaveFormInput } from '../schema/leave'
import leaveService from '../services/leave.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'
import { leaveFormToPayload } from '../helpers/converter'

interface IUpdateTeacherProps {
  schoolId: string
  data: TLeaveFormInput
  id: string
}

const useUpdateLeave = (options?: object) => {
  const { mutateAsync } = useMutation(({ schoolId, id, data }: IUpdateTeacherProps) => {
    const payload = leaveFormToPayload(data)
    return leaveService.updateLeave(schoolId, id, payload)
  }, options)

  const alert = useAlert()
  const updateLeave = async (schoolId: string, data: TUpdateLeaveFormInput) => {
    try {
      const { id } = data

      await mutateAsync({ schoolId, id, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { updateLeave }
}

export default useUpdateLeave
