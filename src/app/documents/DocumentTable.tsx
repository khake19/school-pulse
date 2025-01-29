import { Box, Flex, Text } from '@chakra-ui/react'
import { MenuContent, MenuRoot, MenuTrigger, MenuItem } from '~/components/ui/menu'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { TDocumentData } from './types/documents'
import TableProvider from '~/components/TableProvider/TableProvider'
import Table from '~/components/TableProvider/Table'
import { IPagination } from '~/components/TableProvider/types/pagination'
import TablePagination from '~/components/TableProvider/TablePagination'
import { PhotoView } from 'react-photo-view'

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
      cell: (props) => {
        return (
          <PhotoView src={props.row.original.path}>
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
          </PhotoView>
        )
      },
      header: () => 'Filename',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'datePeriod',
      cell: (props) => {
        return (
          <PhotoView src={props.row.original.path}>
            <Box display="flex" alignItems="center">
              <Box>
                <Text fontSize="sm" fontWeight="500">
                  {props.row.original.datePeriod}
                </Text>
              </Box>
            </Box>
          </PhotoView>
        )
      },
      header: () => 'Date Period',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'profile',
      cell: (props) => (
        <PhotoView src={props.row.original.path}>
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
        </PhotoView>
      ),
      header: () => 'Teacher',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'createdAt',
      cell: (props) => (
        <PhotoView src={props.row.original.path}>
          <Box display="flex" alignItems="center">
            <Box>
              <Text fontSize="sm" fontWeight="500">
                {props.row.original.insertedAt}
              </Text>
            </Box>
          </Box>
        </PhotoView>
      ),
      header: () => 'Created at',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'actions',
      cell: (props) => (
        <Flex flexDir="column" alignItems="flex-end">
          <MenuRoot>
            <MenuTrigger>
              <Image src={`/icons/dots-three.svg`} height={0} width={21} alt="action-icon" />
            </MenuTrigger>
            <MenuContent>
              <MenuItem css={{ _hover: { bg: 'primary' } }} value="download">
                <a href={props.row.original.path} target="_blank" rel="noreferrer">
                  <Text>Download</Text>
                </a>
              </MenuItem>
              <MenuItem
                css={{ _hover: { bg: 'primary' } }}
                onClick={() => handleDelete(props.row.original.id)}
                value="delete"
              >
                <Text>Delete</Text>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
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
