import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'

import TableWrapper from '~/components/Table/TableWrapper'

const DocumentTable = (props: any) => {
  const { documents } = props
  const columnHelper = createColumnHelper<any>()

  const columns: ColumnDef<any, string>[] = [
    columnHelper.display({
      id: 'fileName',
      cell: (props) => (
        <Box display="flex" alignItems="center">
          <Box>
            <Text fontSize="sm" fontWeight="500">
              {props.row.original.fileName}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {props.row.original.size} KB | {props.row.original.type}
            </Text>
          </Box>
        </Box>
      ),
      header: () => 'Filename',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'uploadedBy',
      cell: (props) => {
        return (
          <Box display="flex" alignItems="center">
            <Avatar size="sm" src={process.env.NEXT_PUBLIC_SERVER_URL + props.row.original.avatar} mr={2} />
            <Box>
              <Text fontSize="sm" fontWeight="500">
                {props.row.original.uploadedBy}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {props.row.original.email}
              </Text>
            </Box>
          </Box>
        )
      },
      header: () => 'Uploaded By',
      footer: (info) => info.column.id
    }),
    columnHelper.accessor((row) => `${row.lastModified}`, {
      id: 'lastModified',
      cell: (info) => (
        <Box>
          <Text fontSize="sm" fontWeight="500" color="gray.600">
            {info.getValue()}
          </Text>
        </Box>
      ),
      header: () => 'Last Modified',
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
