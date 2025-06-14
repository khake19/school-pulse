import { z } from 'zod'
import { NestedTransform } from '~/types/helpers'

const leaveSchema = z.object({
  teacherId: z.string().min(1, { message: 'Required' }),
  type: z.string().min(1, { message: 'Required' }),
  remarks: z.string().min(1, { message: 'Required' }),
  startAt: z.string().date(),
  endAt: z.string().date()
})

export const updateLeaveSchema = leaveSchema.extend({
  id: z.string().min(1, { message: 'Required' })
})

export type TLeaveFormInput = z.infer<typeof leaveSchema>
export type TUpdateLeaveFormInput = z.infer<typeof updateLeaveSchema>
export type TLeavePayload = NestedTransform<TLeaveFormInput, 'snake'>

export default leaveSchema
