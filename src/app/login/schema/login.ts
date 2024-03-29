import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' })
})

export type TLoginSchema = z.infer<typeof loginSchema>

export default loginSchema
