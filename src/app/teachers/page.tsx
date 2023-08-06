'use client'
import { Avatar, Box, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Layout from '~/components/Layout'
import TeachersStyle from './Teacher.style'

const Teachers = () => {
  return (
    <Layout>
      <Box css={TeachersStyle.main}>
        <Box css={TeachersStyle.header}>
          <Heading as="h4" size="md">
            Teachers
          </Heading>
        </Box>
        <Box>
          <List>
            <ListItem
              display="flex"
              alignItems="center"
              height="60px"
              padding="0 20px"
              borderBottom="1px"
              borderColor="gray.200"
              mt={2}
              _hover={{ bg: '#B9EDDD' }}
            >
              <Avatar size="md" src="https://robohash.org/sam" mr={2} />
              <Box>
                <Text fontSize="sm" fontWeight="600">
                  Samantha Jazul
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Teacher 1
                </Text>
              </Box>
            </ListItem>
            <ListItem
              display="flex"
              alignItems="center"
              height="60px"
              padding="0 20px"
              borderBottom="1px"
              borderColor="gray.200"
              _hover={{ bg: '#B9EDDD' }}
            >
              <Avatar size="md" src="https://robohash.org/callum" mr={2} />
              <Box>
                <Text fontSize="sm" fontWeight="600">
                  Callum Kerk Jazul
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Teacher 2
                </Text>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Layout>
  )
}

export default Teachers
