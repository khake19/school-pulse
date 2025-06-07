import { useMutation } from '@tanstack/react-query'
import { TLeaveFormInput } from '../schema/leave'
import leaveService from '../services/leave.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'
import { leaveFormToPayload } from '../helpers/converter'

const useCreateLeave = (options?: object) => {
  const { mutateAsync } = useMutation(({ id, data }: { id: string; data: TLeaveFormInput }) => {
    const payload = leaveFormToPayload(data)
    return leaveService.createLeave(id, payload)
  }, options)

  const alert = useAlert()
  const createLeave = async (id: string, data: TLeaveFormInput) => {
    try {
      await mutateAsync({ id, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { createLeave }
}

export default useCreateLeave
