'use client'
import { useState } from 'react'
import { Box, Button, Flex, Heading, Spacer, useDisclosure, Text, Group } from '@chakra-ui/react'

import { main, header } from './Teacher.style'
import TeacherFormModal from './TeacherFormModal'
import TeacherDeleteModal from './TeacherDeleteModal'
import TeacherTable from './TeacherTable'
import SearchInput from '~/components/Search/SearchInput'
import useFilterSearch from '~/hooks/useFilterSearch'

const TeacherList = () => {
  const { open: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [teacherId, setTeacherId] = useState('')

  const { filterSearch, handleSearchValue } = useFilterSearch()

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
            <Button bg="brand.500" onClick={handleCreate}>
              <Text>Add Teacher</Text>
            </Button>
          </Group>
        </Flex>
      </Box>
      <TeacherFormModal isOpen={isFormModalOpen} onClose={onFormModalClose} />
      <TeacherDeleteModal isOpen={isAlertModalOpen} onClose={onAlertModalClose} teacherId={teacherId} />
      <Flex direction="row" borderRadius="md" gap={4}>
        <Box flex="1" p={4} borderRadius="md">
          <SearchInput handleSearchValue={handleSearchValue} width="50%" />
        </Box>
        <Box flex="1" p={4} borderRadius="md"></Box>
      </Flex>

      <TeacherTable handleDelete={handleDelete} filterSearch={filterSearch} />
    </Box>
  )
}

export default TeacherList
