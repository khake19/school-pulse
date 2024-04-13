'use client'
import { useState } from 'react'
import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { createColumnHelper } from '@tanstack/react-table'
import { ITeacher } from './types/teachers'
import { capitalizeFirstLetter } from '~/utils/string'
import useGetTeachers from './hooks/useGetTeachers'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import TableWrapper from '~/components/Table/TableWrapper'

interface ITeacherTableProps {
  handleUpdate: (id: string) => void
  handleDelete: (id: string) => void
}

const TeacherTable = (props: ITeacherTableProps) => {
  const { handleUpdate, handleDelete } = props
  const [currentPage, setCurrentPage] = useState(1)

  const defaultParams = {
    page: currentPage.toString()
  }

  const school = useCurrentSchool((state) => state.school)
  const { teachers, meta } = useGetTeachers(school.id, defaultParams)

  const columnHelper = createColumnHelper<ITeacher>()

  const columns = [
    columnHelper.accessor(
      (row) => `${capitalizeFirstLetter(row.first_name) ?? ''} ${capitalizeFirstLetter(row.last_name) ?? ''}`,
      {
        id: 'fullName',
        cell: (info) => (
          <Box display="flex" alignItems="center" onClick={() => handleUpdate(info.row.original.id)}>
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
        ),
        header: () => '',
        footer: (info) => info.column.id
      }
    ),
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

  return <TableWrapper defaultData={teachers ?? []} columns={columns} pagination={meta} />
}

export default TeacherTable
