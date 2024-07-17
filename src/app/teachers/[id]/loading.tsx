import { Box, Spinner, Text } from '@chakra-ui/react'

const TeacherLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="gray.200"
      flexDirection="column"
      width="100%"
    >
      <Spinner size="md" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" mb={4} />
      <Text fontSize="xl" color="gray.700">
        Loading, please wait...
      </Text>
    </Box>
  )
}

export default TeacherLoading
