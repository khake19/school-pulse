import { Box, Heading, Stat, SimpleGrid } from '@chakra-ui/react'
import { LuTriangleAlert } from 'react-icons/lu'

const Dashboard = () => (
  <Box p={8}>
    <Heading size="lg" mb={4} display="flex" alignItems="center" gap={2}>
      Admin Dashboard
    </Heading>
    <SimpleGrid columns={4} gap={6}>
      <Stat.Root bg="gray.50" p={4} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="gray.200">
        <Stat.Label>Total Schools</Stat.Label>
        <Stat.ValueText>89</Stat.ValueText>
      </Stat.Root>
      <Stat.Root bg="gray.50" p={4} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="gray.200">
        <Stat.Label>Total Teachers</Stat.Label>
        <Stat.ValueText>412</Stat.ValueText>
      </Stat.Root>
      <Stat.Root bg="gray.50" p={4} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="gray.200">
        <Stat.Label>Total Documents</Stat.Label>
        <Stat.ValueText>789</Stat.ValueText>
      </Stat.Root>
      <Stat.Root bg="gray.50" p={4} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="gray.200">
        <Stat.Label>Total Leaves</Stat.Label>
        <Stat.ValueText>1500</Stat.ValueText>
      </Stat.Root>
    </SimpleGrid>
  </Box>
)

export default Dashboard
