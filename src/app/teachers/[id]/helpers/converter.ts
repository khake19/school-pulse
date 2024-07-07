import { TDocumentFormInput } from '../schema/documents'

export const documentCreateFormToPayload = (teacherId: string, form: TDocumentFormInput) => {
  const data = new FormData()
  data.append('document[file]', form.file[0])
  data.append('document[teacher_id]', teacherId)
  data.append('document[document_type]', form.documentType.toString())

  return data
}
