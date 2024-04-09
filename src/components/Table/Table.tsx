import * as React from 'react'
import { useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable, ColumnDef } from '@tanstack/react-table'
import { Table as TTable, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

import Pagination from '../Table/Pagination/Pagination'

interface TableProps<T> {
  defaultData: T[]
  columns: ColumnDef<T, any>[]
}

const Table = <T extends object>(props: TableProps<T>) => {
  const { defaultData = [], columns = [] } = props

  const [currentPage, setCurrentPage] = useState(1)

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const handlePage = (selected: number) => {
    setCurrentPage(selected)
  }

  return (
    <TableContainer width="100%" minHeight={200} maxHeight="100vh">
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
      <Pagination pageCount={10} handlePage={handlePage} />
    </TableContainer>
  )
}

export default Table
