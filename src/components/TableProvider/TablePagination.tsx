import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'
import PaginationSummary from './Pagination/PaginationSummary'
import { useTableDataContext, useTableDispatchContext } from './TableProvider'
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from '../ui/pagination'

const TablePagination = () => {
  const data = useTableDataContext()
  const { onPageChange } = useTableDispatchContext()

  const { pagination } = data

  const { offset, page, size, total, pages } = pagination

  return (
    <Flex>
      <PaginationSummary offset={offset} page={page} size={size} total={total} pages={pages} />
      <Spacer />
      <Box p="4">
        <PaginationRoot
          page={page}
          count={pages}
          pageSize={size}
          onPageChange={(e) => {
            onPageChange(e.page)
          }}
        >
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Box>
    </Flex>
  )
}

export default TablePagination
