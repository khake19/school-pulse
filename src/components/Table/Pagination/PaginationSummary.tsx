import { Box } from '@chakra-ui/react'
import { IPagination } from '../types/pagination'

const PaginationSummary = (props: IPagination) => {
  const { offset, page, size, total, pages } = props
  const firstItemNumber = offset + 1
  const lastItemNumber = page === pages ? total : page * size

  return (
    <Box p="6">
      Showing {firstItemNumber} to {lastItemNumber} of {total} entries
    </Box>
  )
}

export default PaginationSummary
