import { Box, Flex, Spacer } from '@chakra-ui/react'

import Pagination from './Pagination/Pagination'
import PaginationSummary from './Pagination/PaginationSummary'
import { ActionKind, useTableContext, useTableDispatchContext } from './TableProvider'

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
        <Pagination
          pageCount={pages ?? 0}
          handlePage={(selected) => {
            setCurrentPage(selected)
            dispatch({ type: ActionKind.setPage, payload: selected })
          }}
        />
      </Box>
    </Flex>
  )
}

export default TablePagination
