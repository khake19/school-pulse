import { IArrayResponse, IQueryParams } from '~/types/http'
import { IDocumentResponse } from '../types/documents'
import { get, post, remove } from '~/utils/http'

const getDocuments = async (schoolId: string, params?: IQueryParams): Promise<IArrayResponse<IDocumentResponse>> => {
  const queryParams = params
    ? Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== undefined))
    : {}
  const result = await get<IArrayResponse<IDocumentResponse>>(
    `/api/schools/${schoolId}/documents?` + new URLSearchParams(queryParams)
  )
  return result
}

const createDocument = async (schoolId: string, body: any) => {
  const result = await post(`/api/schools/${schoolId}/documents`, body)
  return result
}

const deleteDocument = async (schoolId: string, documentId: string) => {
  const result = await remove(`/api/schools/${schoolId}/documents/${documentId}`)
  return result
}

const documentService = { getDocuments, createDocument, deleteDocument }

export default documentService
