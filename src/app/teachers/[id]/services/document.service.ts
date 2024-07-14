import { IArrayResponse, IQueryParams } from '~/types/http'
import { IDocumentResponse } from '../types/documents'
import { get, post } from '~/utils/http'

const getDocuments = async (schoolId: string, params?: IQueryParams): Promise<IArrayResponse<IDocumentResponse>> => {
  const result = await get<IArrayResponse<IDocumentResponse>>(
    `/api/schools/${schoolId}/documents?` + new URLSearchParams({ ...params })
  )
  return result
}

const createDocument = async (schoolId: string, body: any) => {
  const result = await post(`/api/schools/${schoolId}/documents`, body)
  return result
}

const documentService = { getDocuments, createDocument }

export default documentService
