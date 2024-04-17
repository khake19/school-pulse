import { Box } from '@chakra-ui/react'
import TeachersStyle from '../Teacher.style'
import Tabs from '~/components/Tabs/Tabs'

const TeacherDetails = () => {
  return (
    <Box css={TeachersStyle.main}>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.Panel>
            <p>Tab one content!</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Tab two content!</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Tab three content!</p>
          </Tabs.Panel>
        </Tabs.TabPanels>
      </Tabs>
    </Box>
  )
}

export default TeacherDetails
