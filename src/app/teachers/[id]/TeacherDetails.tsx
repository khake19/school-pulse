import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Heading } from '@chakra-ui/react'
import TeachersStyle from '../Teacher.style'
import Profile from './Profile'

const TeacherDetails = () => {
  //handle id validity

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
            <Profile />
          </TabPanel>
          <TabPanel>
            <p>twos!</p>
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
