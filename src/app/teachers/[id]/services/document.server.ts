import { post } from '~/utils/http'

const createDocument = async (schoolId: string, body: any) => {
  const result = await post(`/api/schools/${schoolId}/documents`, body)
  return result
}

const documentService = { createDocument }

export default documentService
