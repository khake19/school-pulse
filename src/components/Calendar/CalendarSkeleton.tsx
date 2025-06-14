import { Box } from '@chakra-ui/react'

const CalendarSkeleton = () => (
  <Box
    width="100%"
    height="600px"
    bg="white"
    border="1px solid"
    borderColor="gray.200"
    borderRadius="lg"
    display="flex"
    flexDirection="column"
    overflow="hidden"
  >
    {/* Calendar header skeleton */}
    <Box
      p={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box h="8px" w="100px" bg="gray.200" borderRadius="md" />
      <Box display="flex" gap={2}>
        <Box h="8px" w="60px" bg="gray.200" borderRadius="md" />
        <Box h="8px" w="60px" bg="gray.200" borderRadius="md" />
      </Box>
    </Box>

    {/* Calendar grid skeleton */}
    <Box p={4} flex={1}>
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1}>
        {Array.from({ length: 35 }).map((_, i) => (
          <Box key={i} h="80px" bg="gray.50" border="1px solid" borderColor="gray.100" borderRadius="md" />
        ))}
      </Box>
    </Box>
  </Box>
)

export default CalendarSkeleton
