'use client'
import { useState, useCallback } from 'react'
import { Box, Button, Flex, Heading, Spacer, useDisclosure, Text, Group } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useShallow } from 'zustand/react/shallow'

import { main, header } from './Teacher.style'
import TeacherTable from './TeacherTable'
import SearchInput from '~/components/Search/SearchInput'
import useFilterStore from './hooks/useFilterStore'

// Lazy load modals
const TeacherFormModal = dynamic(() => import('./TeacherFormModal'), {
  ssr: false,
  loading: () => null
})

const TeacherDeleteModal = dynamic(() => import('./TeacherDeleteModal'), {
  ssr: false,
  loading: () => null
})

const TeacherList = () => {
  const { open: isFormModalOpen, onClose: onFormModalClose, onOpen: onFormModalOpen } = useDisclosure()
  const { open: isAlertModalOpen, onClose: onAlertModalClose, onOpen: onAlertModalOpen } = useDisclosure()
  const [teacherId, setTeacherId] = useState('')

  // Only subscribe to the specific part of the store we need
  const setTeacherFilters = useFilterStore(useShallow((state) => state.teachers.setFilters))

  const filters = useFilterStore((state) => state.teachers.filters)

  const handleCreate = () => {
    onFormModalOpen()
    setTeacherId('')
  }

  const handleSearchValue = useCallback(
    (value: string) => {
      setTeacherFilters({ filters: { search: value } })
    },
    [setTeacherFilters]
  )

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

      <TeacherTable handleDelete={handleDelete} filterSearch={filters.search} />
    </Box>
  )
}

export default TeacherList
