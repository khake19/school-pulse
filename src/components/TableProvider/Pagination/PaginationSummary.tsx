import { Box, Text } from '@chakra-ui/react'
import { IPagination } from '~/components/TableProvider/types/pagination'

const PaginationSummary = (props: IPagination) => {
  const { offset, page, size, total, pages } = props
  const firstItemNumber = offset + 1
  const lastItemNumber = page === pages ? total : page * size

  return (
    <Box p="6">
      <Text fontSize="md">
        Showing {firstItemNumber} to {lastItemNumber} of {total} entries
      </Text>
    </Box>
  )
}

export default PaginationSummary
