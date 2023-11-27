import { IBase } from '~/types/base'

export interface ITeacher extends IBase {
  email: string
  first_name: string
  last_name: string
  position: string
}
