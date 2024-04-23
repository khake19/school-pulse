import { FormErrorMessage, FormLabel, FormControl, Input, Box, SimpleGrid, Text } from '@chakra-ui/react'

const Profile = () => {
  return (
    <form>
      <SimpleGrid columns={2} spacing={5} width={700}>
        <Box flex="1">
          <FormControl id="first_name" mb={4}>
            <FormLabel htmlFor="first_name">
              <Text as="b">First name</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>{/* <FormErrorMessage>First name is required.</FormErrorMessage> */}</FormErrorMessage>
          </FormControl>

          <FormControl id="email" mb={4}>
            <FormLabel htmlFor="email">
              <Text as="b">Email</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex="2">
          <FormControl id="last_name" mb={4}>
            <FormLabel htmlFor="last_name">
              <Text as="b">Last Name</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>
              <FormErrorMessage>Last name is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
        </Box>
      </SimpleGrid>
    </form>
  )
}

export default Profile
