import { useMutation } from '@tanstack/react-query'
import leaveService from '../services/leave.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'

const useDeleteLeave = (options?: object) => {
  const { mutateAsync } = useMutation(({ schoolId, leaveId }: { schoolId: string; leaveId: string }) => {
    return leaveService.removeLeave(schoolId, leaveId)
  }, options)

  const alert = useAlert()
  const deleteLeave = async (schoolId: string, leaveId: string) => {
    try {
      await mutateAsync({ schoolId, leaveId })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { deleteLeave }
}

export default useDeleteLeave
