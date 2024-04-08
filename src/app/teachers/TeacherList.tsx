'use client'
import { useState } from 'react'
import { Box, Button, Grid, GridItem, Heading, useDisclosure } from '@chakra-ui/react'

import TeachersStyle from './Teacher.style'
import useGetTeachers from './hooks/useGetTeachers'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import TeacherFormModal from './TeacherFormModal'
import TeacherDeleteModal from './TeacherDeleteModal'
import TeacherTable from './TeacherTable'

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
      <TeacherTable teachers={teachers ?? []} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </Box>
  )
}

export default TeacherList
