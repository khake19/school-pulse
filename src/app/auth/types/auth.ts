import { IBase } from '~/types/base'
import { NestedTransform } from '~/types/helpers'

export interface ICurrentUserResponse extends IBase {
  email: string
  first_name: string
  last_name: string
  gender: string
  avatar: string
}

export type TCurrentUserData = NestedTransform<ICurrentUserResponse, 'camel'>
