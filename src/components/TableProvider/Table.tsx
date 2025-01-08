import * as React from 'react'
import { flexRender, getCoreRowModel, useReactTable, ColumnDef } from '@tanstack/react-table'
import { Stack, Table } from '@chakra-ui/react'

import { useTableContext } from './TableProvider'

interface TableProps<T> {
  columns: ColumnDef<T, any>[]
}

const BasicTable = <T extends object>(props: TableProps<T>) => {
  const { columns = [] } = props

  const { data } = useTableContext()

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Stack height="calc(100vh - 270px)" width="100%" minHeight={300} maxHeight="100vh">
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id} _hover={{ bg: 'teal.100' }}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id} css={{ padding: '5px 20px' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  )
}

export default BasicTable
