import { z } from 'zod'

const leaveSchema = z.object({
  teacherId: z.string().min(1, { message: 'Required' }),
  leaveType: z.string().min(1, { message: 'Required' }),
  remarks: z.string().min(1, { message: 'Required' })
})

export type TLeaveFormInput = z.infer<typeof leaveSchema>

export default leaveSchema
