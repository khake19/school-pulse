'use client'
import { useState } from 'react'
import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { TTeacherData } from './types/teachers'
import { capitalizeFirstLetter } from '~/utils/string'
import useGetTeachers from './hooks/useGetTeachers'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import TableWrapper from '~/components/Table/TableWrapper'
import Link from 'next/link'

interface ITeacherTableProps {
  handleDelete: (id: string) => void
}

const TeacherTable = (props: ITeacherTableProps) => {
  const { handleDelete } = props
  const [currentPage, setCurrentPage] = useState(1)

  const defaultParams = {
    page: currentPage.toString()
  }

  const school = useCurrentSchool((state) => state.school)
  const { teachers, meta } = useGetTeachers(school.id, defaultParams)

  const columnHelper = createColumnHelper<TTeacherData>()

  const columns: ColumnDef<TTeacherData, string>[] = [
    columnHelper.accessor((row) => `${capitalizeFirstLetter(row.firstName)} ${capitalizeFirstLetter(row.lastName)}`, {
      id: 'fullName',
      cell: (info) => (
        <Link href={`teachers/${info.row.original.id}`} key="teacher">
          <Box display="flex" alignItems="center">
            <Avatar size="md" src="https://robohash.org/sam" mr={2} />
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
          <Menu>
            <MenuButton>
              <Image src={`/icons/dots-three.svg`} height={0} width={21} alt="action-icon" />
            </MenuButton>
            <MenuList>
              <MenuItem sx={{ _hover: { bg: 'primary' } }} onClick={() => handleDelete(props.row.original.id)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )
    })
  ]

  return <TableWrapper data={teachers ?? []} pagination={meta} columns={columns} setCurrentPage={setCurrentPage} />
}

export default TeacherTable
