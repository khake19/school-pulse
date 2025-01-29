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
      <Spinner size="md" color="blue.500" mb={4} />
      <Text fontSize="xl">Loading, please wait...</Text>
    </Box>
  )
}

export default TeacherLoading
