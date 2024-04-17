import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import TeachersStyle from '../Teacher.style'

const TeacherDetails = () => {
  return (
    <Box css={TeachersStyle.main}>
      <Tabs position="relative">
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Documents</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p> 
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
