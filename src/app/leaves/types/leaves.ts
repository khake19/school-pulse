import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'
import { TLeaveFormInput } from '../schema/leave'

export interface ILeaveResponse extends IBase {
  type: string
  remarks: string
  start_at: string
  end_at: string
  user: {
    id: string
    email: string
    first_name: string
    middle_name: string
    last_name: string
    avatar: string
  }
}

export interface ILeaveEventData {
  id?: string
  start: string
  end: string
  remarks?: string
  teacherId?: string
  type?: string
}

export type TLeaveData = NestedTransform<ILeaveResponse, 'camel'>
export type TLeavePayload = NestedTransform<TLeaveFormInput, 'snake'>
