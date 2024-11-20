import { IArrayResponse, TMetaData } from '~/types/http'
import { TDocumentFormInput } from '../schema/documents'
import { IDocumentResponse, TDocumentData } from '../types/documents'
import metaConverter from '~/helpers/metaConverter'

interface IDocumentResponseToData {
  data: TDocumentData[]
  meta: TMetaData
}
export const documentCreateFormToPayload = (teacherId: string, form: TDocumentFormInput) => {
  const data = new FormData()
  data.append('document[file]', form.file[0])
  data.append('document[teacher_id]', teacherId)
  data.append('document[document_type]', form.documentType.toString())

  return data
}

export const documentResponseToData = (
  documents: IArrayResponse<IDocumentResponse> | undefined
): IDocumentResponseToData => {
  const data =
    documents?.data.map((document) => ({
      id: document.id,
      filename: document.filename,
      path: document.path,
      documentType: document.document_type,
      size: document.size,
      contentType: document.content_type,
      createdAt: document.inserted_at,
      updatedAt: document.updated_at
    })) ?? []

  const meta = metaConverter(documents?.meta)

  return { data, meta }
}
