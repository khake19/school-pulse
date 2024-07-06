import { z } from 'zod'

const documentSchema = z.object({
  file: z.any()
})

export type TDocumentFormInput = z.infer<typeof documentSchema>
export default documentSchema
