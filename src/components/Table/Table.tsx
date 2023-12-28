import * as React from 'react'
import { flexRender, getCoreRowModel, useReactTable, ColumnDef } from '@tanstack/react-table'
import { Table as TTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

interface TableProps<T> {
  defaultData: T[]
  columns: ColumnDef<T, any>[]
}

const Table = <T extends object>(props: TableProps<T>) => {
  const { defaultData = [], columns = [] } = props

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
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
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td sx={{ padding: 0 }} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </TTable>
  )
}

export default Table
