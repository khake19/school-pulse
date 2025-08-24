import { Box, Heading, Stat, SimpleGrid } from '@chakra-ui/react'
import StatusCard from './StatusCard'
import useAllSchoolMetrics from '../schools/hooks/useAllSchoolMetrics'

const Dashboard = () => {
  const { data } = useAllSchoolMetrics()

  return (
    <Box p={8}>
      <Heading size="lg" mb={4} display="flex" alignItems="center" gap={2}>
        Admin Dashboard
      </Heading>
      <SimpleGrid columns={4} gap={6}>
        <StatusCard label="Total Schools" value={data?.schools} />
        <StatusCard label="Total Teachers" value={data?.teachers} />
        <StatusCard label="Total Documents" value={data?.documents} />
        <StatusCard label="Total Leaves" value={data?.leaves} />
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
