'use client'
import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'

import TeachersStyle from './Teacher.style'
import useGetTeachers from './hooks/useGetTeachers'
import Table from '~/components/Table/Table'
import { createColumnHelper } from '@tanstack/react-table'
import { ITeacher } from './types/teachers'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import { capitalizeFirstLetter } from '~/utils/string'
import TeacherFormModal from './TeacherFormModal'
import TeacherDeleteModal from './TeacherDeleteModal'

const TeacherList = () => {
  const school = useCurrentSchool((state) => state.school)
  const { teachers } = useGetTeachers(school.id)
  const { isOpen: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { isOpen: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [teacherId, setTeacherId] = useState('')

  const handleUpdate = (teacherId: string) => {
    onFormModalOpen()
    setTeacherId(teacherId)
  }
  const handleCreate = () => {
    onFormModalOpen()
    setTeacherId('')
  }

  const handleDelete = (teacherId: string) => {
    onAlertModalOpen()
    setTeacherId(teacherId)
  }

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

  return (
    <Box css={TeachersStyle.main}>
      <Box css={TeachersStyle.header}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Heading as="h4" size="md">
              Teachers
            </Heading>
          </GridItem>
          <GridItem colEnd={8}>
            <Button colorScheme="teal" onClick={handleCreate}>
              Create Teacher
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <TeacherFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} teacherId={teacherId} />
      <TeacherDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} teacherId={teacherId} />
      <Table defaultData={teachers ?? []} columns={columns} />
    </Box>
  )
}

export default TeacherList
