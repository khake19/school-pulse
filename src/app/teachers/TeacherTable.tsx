'use client'
import { useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { TTeacherData } from './types/teachers'
import { capitalizeFirstLetter } from '~/utils/string'
import useGetTeachers from './hooks/useGetTeachers'
import Link from 'next/link'
import TableProvider from '~/components/TableProvider/TableProvider'
import TablePagination from '~/components/TableProvider/TablePagination'
import Table from '~/components/TableProvider/Table'
import { Avatar } from '~/components/ui/avatar'
import { MenuContent, MenuRoot, MenuTrigger, MenuItem } from '~/components/ui/menu'
import { Button } from '~/components/ui/button'

interface ITeacherTableProps {
  handleDelete: (id: string) => void
}

const TeacherTable = (props: ITeacherTableProps) => {
  const { handleDelete } = props
  const [currentPage, setCurrentPage] = useState(1)

  const defaultParams = currentPage === 0 ? {} : { page: currentPage.toString() }

  const { teachers, meta, isLoading } = useGetTeachers(defaultParams)

  const columnHelper = createColumnHelper<TTeacherData>()

  const columns: ColumnDef<TTeacherData, string>[] = [
    columnHelper.accessor((row) => `${capitalizeFirstLetter(row.firstName)} ${capitalizeFirstLetter(row.lastName)}`, {
      id: 'fullName',
      cell: (info) => (
        <Link href={`teachers/${info.row.original.id}`} key="teacher">
          <Box display="flex" alignItems="center">
            <Avatar
              size="xl"
              name={info.getValue()}
              variant="subtle"
              src={info.row.original.avatar}
              mr={2}
              colorPalette="red"
            />
            <Box>
              <Text fontSize="sm" fontWeight="600">
                {info.getValue()}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {capitalizeFirstLetter(info.row.original.position.name)}
              </Text>
            </Box>
          </Box>
        </Link>
      ),
      header: () => '',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'actions',
      cell: (props) => (
        <Flex flexDir="column" alignItems="flex-end">
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Image src={`/icons/dots-three.svg`} height={0} width={21} alt="action-icon" />
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem
                css={{ _hover: { bg: 'primary' } }}
                onClick={() => handleDelete(props.row.original.id)}
                value="delete"
              >
                Delete
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Flex>
      )
    })
  ]

  return (
    <TableProvider defaultData={teachers ?? []} pagination={meta} isLoading={isLoading}>
      <Table columns={columns} />
      <TablePagination setCurrentPage={setCurrentPage} />
    </TableProvider>
  )
}

export default TeacherTable
