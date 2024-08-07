'use client'
import { useState } from 'react'
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, useDisclosure, Text } from '@chakra-ui/react'

import TeachersStyle from './Teacher.style'
import TeacherFormModal from './TeacherFormModal'
import TeacherDeleteModal from './TeacherDeleteModal'
import TeacherTable from './TeacherTable'

const TeacherList = () => {
  const { isOpen: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { isOpen: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [teacherId, setTeacherId] = useState('')

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
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md"> Teachers</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal" onClick={handleCreate}>
              <Text>Add Teacher</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <TeacherFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} />
      <TeacherDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} teacherId={teacherId} />
      <TeacherTable handleDelete={handleDelete} />
    </Box>
  )
}

export default TeacherList
