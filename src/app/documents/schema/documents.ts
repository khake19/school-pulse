import { z } from 'zod'

const documentSchema = z.object({
  file: z.instanceof(File).array().min(1),
  documentType: z.number(),
  teacherId: z.string()
})

export type TDocumentFormInput = z.infer<typeof documentSchema>
export default documentSchema
