import { Stat, Box, Flex } from '@chakra-ui/react'

interface IStatusProps {
  label: string
  value: number | undefined
}

const StatusCard = (props: IStatusProps) => {
  const { label, value } = props
  return (
    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="gray.200">
      <Flex justify="space-between" align="flex-start">
        <Box flex="1">
          <Stat.Root>
            <Stat.Label>{label}</Stat.Label>
            <Stat.ValueText>{value}</Stat.ValueText>
          </Stat.Root>
        </Box>
      </Flex>
    </Box>
  )
}

export default StatusCard
