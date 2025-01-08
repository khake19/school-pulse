'use client'
import { useState } from 'react'
import { Box, Button, Flex, Heading, Spacer, useDisclosure, Text, Group } from '@chakra-ui/react'

import { main, header } from './Teacher.style'
import TeacherFormModal from './TeacherFormModal'
import TeacherDeleteModal from './TeacherDeleteModal'
import TeacherTable from './TeacherTable'

const TeacherList = () => {
  const { open: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
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
    <Box css={main}>
      <Box css={header}>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="xl"> Teachers</Heading>
          </Box>
          <Spacer />
          <Group gap="2">
            <Button colorPalette="teal" onClick={handleCreate}>
              <Text>Add Teacher</Text>
            </Button>
          </Group>
        </Flex>
      </Box>
      <TeacherFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} />
      <TeacherDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} teacherId={teacherId} />
      <TeacherTable handleDelete={handleDelete} />
    </Box>
  )
}

export default TeacherList
