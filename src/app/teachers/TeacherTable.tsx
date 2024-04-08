'use client'
import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Table from '~/components/Table/Table'
import { createColumnHelper } from '@tanstack/react-table'
import { ITeacher } from './types/teachers'
import { capitalizeFirstLetter } from '~/utils/string'

interface ITeacherTableProps {
  handleUpdate: (id: string) => void
  handleDelete: (id: string) => void
  teachers: ITeacher[]
}

const TeacherTable = (props: ITeacherTableProps) => {
  const { teachers, handleUpdate, handleDelete } = props

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

  return <Table defaultData={teachers ?? []} columns={columns} />
}

export default TeacherTable
