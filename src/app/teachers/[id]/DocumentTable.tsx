import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'

import TableWrapper from '~/components/Table/TableWrapper'
import { TDocumentData } from './types/documents'

interface IDocumentTableProps {
  documents: TDocumentData[]
}

const DocumentTable = (props: IDocumentTableProps) => {
  const { documents } = props
  const columnHelper = createColumnHelper<TDocumentData>()

  const columns: ColumnDef<TDocumentData, string>[] = [
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
      id: 'actions',
      cell: (props) => (
        <Flex flexDir="column" alignItems="flex-end">
          <Menu>
            <MenuButton>
              <Image src={`/icons/dots-three.svg`} height={0} width={21} alt="action-icon" />
            </MenuButton>
            <MenuList>
              <MenuItem sx={{ _hover: { bg: 'primary' } }} onClick={() => undefined}>
                Open in browser
              </MenuItem>
              <MenuItem sx={{ _hover: { bg: 'primary' } }} onClick={() => undefined}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )
    })
  ]

  return (
    <TableWrapper
      data={documents ?? []}
      pagination={{ offset: 0, page: 0, size: 0, total: 0, pages: 0 }}
      columns={columns}
      setCurrentPage={() => {}}
    />
  )
}

export default DocumentTable
