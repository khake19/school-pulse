import { Box, Heading, Stat, SimpleGrid } from '@chakra-ui/react'
import StatusCard from './StatusCard'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useSchoolMetrics from '../schools/hooks/useSchoolMetrics'

const Dashboard = () => {
  const school = useCurrentSchool((state) => state.school)
  const { data } = useSchoolMetrics(school.id)

  return (
    <Box p={8}>
      <Heading size="lg" mb={4} display="flex" alignItems="center" gap={2}>
        School Dashboard
      </Heading>
      <SimpleGrid columns={3} gap={6}>
        <StatusCard label="Total Teachers" value={data?.teachers} />
        <StatusCard label="Total Documents" value={data?.documents} />
        <StatusCard label="Total Leaves" value={data?.leaves} />
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
