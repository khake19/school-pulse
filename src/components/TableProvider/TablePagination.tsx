import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'
import PaginationSummary from './Pagination/PaginationSummary'
import { ActionKind, useTableContext, useTableDispatchContext } from './TableProvider'
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from '../ui/pagination'

interface ITablePaginationProps {
  setCurrentPage: (page: number) => void
}
const TablePagination = (props: ITablePaginationProps) => {
  const { setCurrentPage } = props
  const data = useTableContext()
  const { dispatch } = useTableDispatchContext()

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
            setCurrentPage(e.page)
            dispatch({ type: ActionKind.setPage, payload: e.page })
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
