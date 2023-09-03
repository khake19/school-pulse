'use client'

import { Avatar, Box, Heading, List, ListItem, Text } from '@chakra-ui/react'

import TeachersStyle from './Teacher.style'
import useGetTeachers from './hooks/useGetTeachers'

const TeacherList = () => {
  const { teachers } = useGetTeachers()

  return (
    <Box css={TeachersStyle.main}>
      <Box css={TeachersStyle.header}>
        <Heading as="h4" size="md">
          Teachers
        </Heading>
      </Box>
      <Box>
        <List>
          {teachers?.map((teacher) => {
            return (
              <ListItem
                key={teacher.id}
                display="flex"
                alignItems="center"
                height="60px"
                padding="0 20px"
                borderColor="gray.200"
                mt={2}
                _hover={{ bg: '#B9EDDD' }}
              >
                <Avatar size="md" src="https://robohash.org/sam" mr={2} />
                <Box>
                  <Text fontSize="sm" fontWeight="600">
                    {teacher.first_name} {teacher.last_name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Teacher 1
                  </Text>
                </Box>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default TeacherList
