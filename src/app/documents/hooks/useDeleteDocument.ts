import { useMutation } from '@tanstack/react-query'
import documentService from '../services/document.service'
import useAlert from '~/hooks/useAlert'
import getErrorMessage from '~/utils/error'

const useDeleteDocument = (options?: object) => {
  const { mutateAsync } = useMutation(({ id, documentId }: { id: string; documentId: string }) => {
    return documentService.deleteDocument(id, documentId)
  }, options)

  const alert = useAlert()
  const deleteDocument = async (id: string, documentId: string) => {
    try {
      await mutateAsync({ id, documentId })
    } catch (error) {
      if (error instanceof Error) {
        alert.fetchError(getErrorMessage(error))
      }
    }
  }

  return { deleteDocument }
}

export default useDeleteDocument
