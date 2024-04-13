import { Divider } from '@chakra-ui/react'
import Table from './Table'
import TablePagination from './TablePagination'
import { IPagination } from './types/pagination'
import { ColumnDef } from '@tanstack/react-table'

interface ITableWrapperProps<T> {
  data: T[]
  pagination: IPagination
  columns: ColumnDef<T, any>[]
}

const TableWrapper = <T extends object>(props: ITableWrapperProps<T>) => {
  const { data, pagination, columns } = props

  return (
    <>
      <Table defaultData={data} columns={columns} />
      <Divider />
      <TablePagination {...pagination} />
    </>
  )
}

export default TableWrapper
