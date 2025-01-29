import { z } from 'zod'
import { zfd } from 'zod-form-data'

const documentSchema = zfd.formData({
  file: zfd.file(z.array(z.instanceof(File))),
  documentType: zfd.numeric(),
  teacherId: zfd.text(),
  datePeriod: zfd.text()
})

export type TDocumentFormInput = z.infer<typeof documentSchema>
export default documentSchema
