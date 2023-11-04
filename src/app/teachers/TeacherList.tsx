'use client'

import { Avatar, Box, Heading, List, ListItem, Text } from '@chakra-ui/react'

import TeachersStyle from './Teacher.style'
import useGetTeachers from './hooks/useGetTeachers'
import Table from '~/components/Table/Table'
import { createColumnHelper } from '@tanstack/react-table'
import { ITeacher } from './types/teachers'

const TeacherList = () => {
  const { teachers } = useGetTeachers()

  const columnHelper = createColumnHelper<ITeacher>()
  return (
    <Box css={TeachersStyle.main}>
      <Box css={TeachersStyle.header}>
        <Heading as="h4" size="md">
          Teachers
        </Heading>
      </Box>
      <Table
        defaultData={teachers ?? []}
        columns={[
          columnHelper.accessor((row) => `${row.first_name ?? ''} ${row.last_name ?? ''}`, {
            id: 'fullName',
            cell: (info) => (
              <Box
                display="flex"
                alignItems="center"
                height="60px"
                padding="0 20px"
                borderColor="gray.200"
                _hover={{ bg: '#B9EDDD' }}
              >
                <Avatar size="md" src="https://robohash.org/sam" mr={2} />
                <Box>
                  <Text fontSize="sm" fontWeight="600">
                    {info.getValue()}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Teacher 1
                  </Text>
                </Box>
              </Box>
            ),
            header: () => '',
            footer: (info) => info.column.id
          })
        ]}
      />
    </Box>
  )
}

export default TeacherList
