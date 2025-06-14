import { z } from 'zod'

const leaveSchema = z.object({
  teacherId: z.string().min(1, { message: 'Required' }),
  leaveType: z.string().min(1, { message: 'Required' }),
  remarks: z.string().min(1, { message: 'Required' }),
  startAt: z.string().date(),
  endAt: z.string().date()
})

export const updateLeaveSchema = leaveSchema.extend({
  id: z.string().min(1, { message: 'Required' })
})

export type TLeaveFormInput = z.infer<typeof leaveSchema>
export type TUpdateLeaveFormInput = z.infer<typeof updateLeaveSchema>

export default leaveSchema
