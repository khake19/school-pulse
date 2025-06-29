import { IArrayResponse, TMetaData } from '~/types/http'
import { IDocumentResponse, TDocumentData } from '../types/documents'
import metaConverter from '~/helpers/metaConverter'
import { format, parse, parseISO } from 'date-fns'
import { DateTime } from '~/constant/date'
import { TDocumentFormInput } from '../schema/documents'
import { IFilterProps } from '../hooks/useFilterStore'

interface IDocumentResponseToData {
  data: TDocumentData[]
  meta: TMetaData
}

export const documentCreateFormToPayload = (form: TDocumentFormInput) => {
  const data = new FormData()
  data.append('document[file]', form.file[0])
  data.append('document[teacher_id]', form.teacherId)
  data.append('document[document_type]', form.documentType.toString())
  data.append('document[date_period]', form.datePeriod)

  return data
}

export const documentToData = (document: IDocumentResponse): TDocumentData => ({
  id: document.id,
  filename: document.filename,
  path: document.path,
  documentType: document.document_type,
  size: document.size,
  contentType: document.content_type,
  insertedAt: format(parseISO(document.inserted_at ?? ''), DateTime.format),
  updatedAt: format(parseISO(document.updated_at ?? ''), DateTime.format),
  datePeriod: format(parse(document.date_period, 'yyyy-MM', new Date()), DateTime.month),
  user: {
    email: document.user.email,
    firstName: document.user.first_name,
    middleName: document.user.middle_name,
    lastName: document.user.last_name,
    avatar: document.user.avatar
  }
})

export const documentResponseToData = (
  documents: IArrayResponse<IDocumentResponse> | undefined
): IDocumentResponseToData => {
  const data = documents?.data.map(documentToData) ?? []
  const meta = metaConverter(documents?.meta)

  return { data, meta }
}

export const filtersToQueryParams = (params: IFilterProps | null) => {
  return {
    teacher_id: params?.teacherId ?? ''
  }
}
