import { Box, Flex, Spacer } from '@chakra-ui/react'

import Pagination from '../Table/Pagination/Pagination'
import PaginationSummary from './Pagination/PaginationSummary'
import { IPagination } from './types/pagination'

interface ITablePaginationProps extends IPagination {
  setCurrentPage: (selected: number) => void
}

const TablePagination = (props: ITablePaginationProps) => {
  const { setCurrentPage, offset, page, size, total, pages } = props

  const handlePage = (selected: number) => {
    setCurrentPage(selected)
  }

  return (
    <Flex>
      <PaginationSummary offset={offset} page={page} size={size} total={total} pages={pages} />
      <Spacer />
      <Box p="4">
        <Pagination pageCount={pages ?? 0} handlePage={handlePage} />
      </Box>
    </Flex>
  )
}

export default TablePagination
