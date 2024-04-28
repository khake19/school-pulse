import { z } from 'zod'

const teacherSchema = z.object({
  firstName: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  position: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' })
})

export default teacherSchema
