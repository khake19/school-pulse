import { flexRender, getCoreRowModel, useReactTable, ColumnDef } from '@tanstack/react-table'
import { Stack, Table } from '@chakra-ui/react'

import { useTableDataContext } from './TableWrapper'
import useTableRows from './hooks/useTableRows'

interface TableProps<T> {
  columns: ColumnDef<T, any>[]
}

const BasicTable = <T extends object>(props: TableProps<T>) => {
  const { columns = [] } = props

  const { data, isLoading } = useTableDataContext<T>()
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const rows = useTableRows(isLoading, table, columns)

  return (
    <Stack width="100%" maxHeight="100vh" shadow="md" borderRadius="md">
      <Table.Root size="md">
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader key={header.id} borderRadius="md">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>
    </Stack>
  )
}

export default BasicTable
