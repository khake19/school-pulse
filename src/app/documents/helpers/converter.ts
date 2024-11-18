import { IArrayResponse, TMetaData } from '~/types/http'
import { IDocumentResponse, TDocumentData } from '../types/documents'
import metaConverter from '~/helpers/metaConverter'
import { format, parseISO } from 'date-fns'
import { DateTime } from '~/constant/date'
import { TDocumentFormInput } from '../schema/documents'

interface IDocumentResponseToData {
  data: TDocumentData[]
  meta: TMetaData
}

export const documentCreateFormToPayload = (form: TDocumentFormInput) => {
  const data = new FormData()
  console.log('hello', form)
  data.append('document[file]', form.file[0])
  data.append('document[teacher_id]', form.teacherId)
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
      insertedAt: format(parseISO(document.inserted_at ?? ''), DateTime.format),
      updatedAt: format(parseISO(document.updated_at ?? ''), DateTime.format),
      user: {
        email: document.user.email,
        firstName: document.user.first_name,
        lastName: document.user.last_name,
        avatar: document.user.avatar
      }
    })) ?? []

  const meta = metaConverter(documents?.meta)

  return { data, meta }
}
