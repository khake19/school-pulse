import * as React from 'react'
import { flexRender, getCoreRowModel, useReactTable, ColumnDef } from '@tanstack/react-table'
import { Table as TTable, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import { useTableContext } from './TableProvider'

interface TableProps<T> {
  columns: ColumnDef<T, any>[]
}

const Table = <T extends object>(props: TableProps<T>) => {
  const { columns = [] } = props

  const { data } = useTableContext()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <TableContainer height="calc(100vh - 270px)" width="100%" minHeight={300} maxHeight="100vh">
      <TTable>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id} sx={{ _hover: { bg: 'primary' } }}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id} sx={{ padding: '5px 20px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </TTable>
    </TableContainer>
  )
}

export default Table
