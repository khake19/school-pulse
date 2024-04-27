import { IBase } from '~/types/base'
import { SnakeToCamelCaseNested } from '~/types/helpers'

export interface ITeacherResponse extends IBase {
  email: string
  first_name: string
  last_name: string
  position: IPositionResponse
}

export interface IPositionResponse extends IBase {
  name: string
  salary_grade: string
  type: string
}

export type TTeacher = SnakeToCamelCaseNested<ITeacherResponse>
