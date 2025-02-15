import { Table } from '@chakra-ui/react'
import { ColumnDef, flexRender, useReactTable } from '@tanstack/react-table'
import { useMemo } from 'react'
import { SkeletonText } from '~/components/ui/skeleton'

const useTableRows = <T extends object>(
  isLoading: boolean | undefined,
  table: ReturnType<typeof useReactTable<T>>,
  columns: ColumnDef<T, string>[]
) => {
  const loadingRow = useMemo(
    () => (
      <Table.Row>
        {columns.map((_id, key) => (
          <Table.Cell key={key}>
            <SkeletonText noOfLines={1} />
          </Table.Cell>
        ))}
      </Table.Row>
    ),
    [columns]
  )
  const rows = isLoading
    ? loadingRow
    : table.getRowModel().rows.map((row) => (
        <Table.Row key={row.id} _hover={{ bg: 'brand.100' }}>
          {row.getVisibleCells().map((cell) => (
            <Table.Cell key={cell.id} css={{ padding: '5px 14px' }}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Table.Cell>
          ))}
        </Table.Row>
      ))

  return rows
}

export default useTableRows
