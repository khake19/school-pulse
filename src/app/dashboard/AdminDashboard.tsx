import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import StatusCard from './StatusCard'
import useAllSchoolMetrics from '../schools/hooks/useAllSchoolMetrics'
import { LuSchool, LuUsers, LuFiles, LuCalendarDays } from 'react-icons/lu'

const Dashboard = () => {
  const { data } = useAllSchoolMetrics()
  return (
    <Box p={8}>
      <Heading size="lg" mb={4} display="flex" alignItems="center" gap={2}>
        Admin Dashboard
      </Heading>
      <SimpleGrid columns={4} gap={6}>
        <StatusCard label="Total Schools" value={data?.schools} renderIcon={(props) => <LuSchool {...props} />} />
        <StatusCard label="Total Teachers" value={data?.teachers} renderIcon={(props) => <LuUsers {...props} />} />
        <StatusCard label="Total Documents" value={data?.documents} renderIcon={(props) => <LuFiles {...props} />} />
        <StatusCard label="Total Leaves" value={data?.leaves} renderIcon={(props) => <LuCalendarDays {...props} />} />
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
