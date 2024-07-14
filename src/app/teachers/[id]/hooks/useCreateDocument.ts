import { useMutation } from '@tanstack/react-query'
import { TDocumentFormInput } from '../schema/documents'
import documentService from '../services/document.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'
import { documentCreateFormToPayload } from '../helpers/converter'

const useCreateDocument = (options?: object) => {
  const { mutateAsync } = useMutation(
    ({ id, teacherId, data }: { id: string; teacherId: string; data: TDocumentFormInput }) => {
      const payload = documentCreateFormToPayload(teacherId, data)
      return documentService.createDocument(id, payload)
    },
    options
  )

  const alert = useAlert()
  const createDocument = async (id: string, teacherId: string, data: TDocumentFormInput) => {
    try {
      await mutateAsync({ id, teacherId, data })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { createDocument }
}

export default useCreateDocument
