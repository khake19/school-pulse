import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'
import teacherSchema from '../schema/teachers'
import { z } from 'zod'

export interface ITeacherResponse extends IBase {
  email: string
  first_name: string
  middle_name: string
  last_name: string
  suffix?: string
  position: IPositionResponse
  gender: string
  employee_number: string
  avatar: string
  philhealth: string
  gsis: string
  pagibig: string
  tin: string
  plantilla: string
  date_hired: string
  date_promotion: string
}

export interface IPositionResponse {
  name: string
  salary_grade: string
  type: string
  id: number
}

export type TTeacherFormInput = z.infer<typeof teacherSchema>
export type TTeacherData = NestedTransform<ITeacherResponse, 'camel'>
export type TTeacherPayload = NestedTransform<TTeacherFormInput, 'snake'>
