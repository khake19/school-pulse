import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Heading } from '@chakra-ui/react'

import TeachersStyle from '../Teacher.style'
import Profile from './Profile'
import Document from './Document'
import useGetTeacherDetails from './hooks/useGetTeacherDetails'

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
          <Tab>Profile</Tab>
          <Tab>Documents</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Profile teacher={teacher} />
          </TabPanel>
          <TabPanel>
            <Document teacher={teacher} />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default TeacherDetails
