import { useQuery } from '@tanstack/react-query'
import positionService from '../services/position.service'

const useGetPositions = () => {
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['positions'],
    queryFn: positionService.allPositions
  })

  return {
    positions: data?.data,
    status,
    error,
    isFetching
  }
}

export default useGetPositions
