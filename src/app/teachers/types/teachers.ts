import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'
import teacherSchema from '../schema/teachers'
import { z } from 'zod'

export interface ITeacherResponse extends IBase {
  email: string
  first_name: string
  last_name: string
  position: IPositionResponse
  gender: string
  employee_number: string
  remarks: string
  avatar: string
}

export interface IPositionResponse extends IBase {
  name: string
  salary_grade: string
  type: string
}

export type TTeacherFormInput = z.infer<typeof teacherSchema>
export type TTeacherData = NestedTransform<ITeacherResponse, 'camel'>
export type TTeacherPayload = NestedTransform<TTeacherFormInput, 'snake'>
