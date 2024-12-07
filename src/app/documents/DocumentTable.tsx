import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { TDocumentData } from './types/documents'
import TableProvider from '~/components/TableProvider/TableProvider'
import Table from '~/components/TableProvider/Table'
import { IPagination } from '~/components/TableProvider/types/pagination'
import TablePagination from '~/components/TableProvider/TablePagination'

interface IDocumentTableProps {
  handleDelete: (id: string) => void
  customColumns?: ColumnDef<TDocumentData, string>[]
  data: TDocumentData[]
  pagination: IPagination
  isLoading: boolean
  setCurrentPage: (page: number) => void
  showFullName: boolean
}

const DocumentTable = (props: IDocumentTableProps) => {
  const { handleDelete, customColumns, data, pagination, isLoading, setCurrentPage, showFullName } = props
  const columnHelper = createColumnHelper<TDocumentData>()

  const defaultColumns: ColumnDef<TDocumentData, string>[] = [
    columnHelper.display({
      id: 'fileName',
      cell: (props) => (
        <Box display="flex" alignItems="center">
          <Box>
            <Text fontSize="sm" fontWeight="500">
              {props.row.original.documentType}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {props.row.original.size} KB | {props.row.original.contentType}
            </Text>
          </Box>
        </Box>
      ),
      header: () => 'Filename',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'profile',
      cell: (props) => (
        <Box display="flex" alignItems="center">
          <Box>
            <Text fontSize="sm" fontWeight="500">
              {props.row.original.user.firstName} {props.row.original.user.lastName}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {props.row.original.user.email}
            </Text>
          </Box>
        </Box>
      ),
      header: () => 'Teacher',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'createdAt',
      cell: (props) => (
        <Box display="flex" alignItems="center">
          <Box>
            <Text fontSize="sm" fontWeight="500">
              {props.row.original.insertedAt}
            </Text>
          </Box>
        </Box>
      ),
      header: () => 'Created At',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'actions',
      cell: (props) => (
        <Flex flexDir="column" alignItems="flex-end">
          <Menu>
            <MenuButton>
              <Image src={`/icons/dots-three.svg`} height={0} width={21} alt="action-icon" />
            </MenuButton>
            <MenuList>
              <MenuItem sx={{ _hover: { bg: 'primary' } }}>
                <a href={props.row.original.path} target="_blank" rel="noreferrer">
                  <Text>Download</Text>
                </a>
              </MenuItem>
              <MenuItem sx={{ _hover: { bg: 'primary' } }} onClick={() => handleDelete(props.row.original.id)}>
                <Text>Delete</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )
    })
  ]

  // Filter out the 'profile' column if showTeachers is false
  const filteredColumns = showFullName ? defaultColumns : defaultColumns.filter((col) => col.id !== 'profile')

  const mergeColumns = (
    defaultCols: ColumnDef<TDocumentData, string>[],
    customCols?: ColumnDef<TDocumentData, string>[]
  ) => {
    if (!customCols) return defaultCols

    const customColumnsMap = new Map(customCols.map((col) => [col.id, col]))

    const mergedColumns = defaultCols.map((defaultCol) => {
      return customColumnsMap.get(defaultCol.id) || defaultCol
    })

    customCols.forEach((customCol) => {
      if (!defaultCols.find((defaultCol) => defaultCol.id === customCol.id)) {
        mergedColumns.push(customCol)
      }
    })

    return mergedColumns
  }

  const columns = mergeColumns(filteredColumns, customColumns)

  return (
    <TableProvider defaultData={data} pagination={pagination} isLoading={isLoading}>
      <Table columns={columns} />
      <TablePagination setCurrentPage={setCurrentPage} />
    </TableProvider>
  )
}

export default DocumentTable
