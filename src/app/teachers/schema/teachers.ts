import { z } from 'zod'

const teacherSchema = z.object({
  first_name: z.string().min(1, { message: 'Required' }),
  last_name: z.string().min(1, { message: 'Required' }),
  position: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' })
})

export type TTeacherFormInput = z.infer<typeof teacherSchema>

export default teacherSchema
