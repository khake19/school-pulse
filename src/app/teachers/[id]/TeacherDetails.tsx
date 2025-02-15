// import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Heading, Text } from '@chakra-ui/react'
import { Box, Tabs, Heading } from '@chakra-ui/react'

import { main } from '../Teacher.style'
import Profile from './Profile'
import useGetTeacherDetails from './hooks/useGetTeacherDetails'
import DocumentList from '~/app/documents/DocumentList'

const TeacherDetails = () => {
  const { teacher } = useGetTeacherDetails()
  return (
    <Box css={main}>
      <Box marginBottom={5}>
        <Heading as="h4" size="md">
          Teacher Details
        </Heading>
      </Box>
      <Tabs.Root defaultValue="documents">
        <Tabs.List>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="documents">
          <DocumentList teacherId={teacher.id} />
        </Tabs.Content>
        <Tabs.Content value="profile">
          <Profile teacher={teacher} />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}

export default TeacherDetails
