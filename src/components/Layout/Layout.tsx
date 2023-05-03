import { Flex, Box, Heading, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Header from '~/components/Header'

const Layout = ({children}) => {

  return (
    <Flex
      direction="row"
      align="stretch"
      justify="flex-start"
      minHeight="100vh"
    >
      <Flex
        flex="1"
        direction="column"
        align="stretch"
        justify="space-between"
        minHeight="100vh"
      >
        <Header />
        <Box flex="1" w="100%" bg="#f6f7fa" p={4}>
          {/* Main content goes here */}
          <Text>Body content goes here.</Text>
        </Box>

        <Box w="100%" bg="#577D86" p={4}>
          Footer
        </Box>
      </Flex>
    </Flex>
  )
}

export default Layout
