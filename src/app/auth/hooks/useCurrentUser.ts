import { useQuery } from '@tanstack/react-query'
import authService from '../services/auth.service'
import { currentUserResponseToData } from '../helpers/converter'
import { IResponse } from '~/types/http'
import { ICurrentUserResponse } from '../types/auth'

const useCurrentUser = () => {
  const { data, status, error, isFetching } = useQuery<IResponse<ICurrentUserResponse>>({
    queryKey: ['me'],
    queryFn: () => authService.currentUser(),
    keepPreviousData: true
  })

  const currentUser = currentUserResponseToData(data?.data)

  return {
    currentUser,
    status,
    error,
    isFetching
  }
}

export default useCurrentUser
