import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Heading, Text } from '@chakra-ui/react'

import TeachersStyle from '../Teacher.style'
import Profile from './Profile'
import Document from './Document'
import useGetTeacherDetails from './hooks/useGetTeacherDetails'
import DocumentList from '~/app/documents/DocumentList'

const TeacherDetails = () => {
  const { teacher } = useGetTeacherDetails()
  return (
    <Box css={TeachersStyle.main}>
      <Box marginBottom={5}>
        <Heading as="h4" size="md">
          Teacher Details
        </Heading>
      </Box>
      <Tabs position="relative" colorScheme="teal">
        <TabList>
          <Tab>
            <Text>Documents</Text>
          </Tab>
          <Tab>
            <Text>Profile</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DocumentList teacherId={teacher.id} />
          </TabPanel>
          <TabPanel>
            <Profile teacher={teacher} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default TeacherDetails
