import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import Image from 'next/image'
import { TDocumentData } from './types/documents'
import TableProvider from '~/components/TableProvider/TableProvider'
import Table from '~/components/TableProvider/Table'
import useGetDocuments from './hooks/useGetDocument'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
// import useQueryParams from '~/hooks/useQueryParams'

interface IDocumentTableProps {
  handleDelete: (id: string) => void
}

const DocumentTable = (props: IDocumentTableProps) => {
  const { handleDelete } = props
  const columnHelper = createColumnHelper<TDocumentData>()

  const school = useCurrentSchool((state) => state.school)
  const { data: documents, meta, isLoading } = useGetDocuments(school?.id)

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
              <MenuItem sx={{ _hover: { bg: 'primary' } }}>
                <a href={process.env.SERVER_URL + props.row.original.path} target="_blank" rel="noreferrer">
                  <Text>Open in browser</Text>
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

  return (
    <TableProvider defaultData={documents ?? []} pagination={meta} isLoading={isLoading}>
      <Table columns={columns} />
    </TableProvider>
  )
}

export default DocumentTable
