import { current } from 'immer'
import { ICurrentUserResponse, TCurrentUserData } from '../types/auth'

export const currentUserResponseToData = (currentUser: ICurrentUserResponse | undefined): TCurrentUserData => {
  return {
    id: currentUser?.id ?? '',
    email: currentUser?.email ?? '',
    firstName: currentUser?.first_name ?? '',
    lastName: currentUser?.last_name ?? '',
    gender: currentUser?.gender ?? '',
    avatar: currentUser?.avatar ?? '',
    role: {
      id: currentUser?.role.id ?? '',
      name: currentUser?.role.name ?? '',
      description: currentUser?.role.description ?? ''
    }
  }
}
