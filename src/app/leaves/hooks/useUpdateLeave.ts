import { useMutation } from '@tanstack/react-query'
import { TLeaveFormInput } from '../schema/leave'
import leaveService from '../services/leave.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'
import { leaveFormToPayload } from '../helpers/converter'

interface IUpdateTeacherProps {
  schoolId: string
  leaveId: string
  data: TLeaveFormInput
}

const useUpdateLeave = (options?: object) => {
  const { mutateAsync } = useMutation(({ schoolId, leaveId, data }: IUpdateTeacherProps) => {
    const payload = leaveFormToPayload(data)
    return leaveService.updateLeave(schoolId, leaveId, payload)
  }, options)

  const alert = useAlert()
  const updateLeave = async (schoolId: string, leaveId: string, data: TLeaveFormInput) => {
    try {
      await mutateAsync({ schoolId, leaveId, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { updateLeave }
}

export default useUpdateLeave
