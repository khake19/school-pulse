import { TDocumentFormInput } from '../schema/documents'

export const documentCreateFormToPayload = (form: TDocumentFormInput) => {
  const data = new FormData()
  data.append('document[file]', form.file[0])

  return data
}
