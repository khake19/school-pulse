import { Divider } from '@chakra-ui/react'
import Table from './Table'
import TablePagination from './TablePagination'
import { IPagination } from './types/pagination'
import { ColumnDef } from '@tanstack/react-table'

interface ITableWrapperProps<T> {
  data: T[]
  pagination: IPagination
  columns: ColumnDef<T, string>[]
  setCurrentPage: (selected: number) => void
}

const TableWrapper = <T extends object>(props: ITableWrapperProps<T>) => {
  const { data, pagination, columns = [], setCurrentPage } = props

  return (
    <>
      <Table defaultData={data} columns={columns} />
      <Divider />
      <TablePagination {...pagination} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default TableWrapper
