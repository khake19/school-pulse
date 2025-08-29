import { Stat, Box, Flex, useToken } from '@chakra-ui/react'

interface IStatusProps {
  label: string
  value: number | undefined
  renderIcon?: (props: { size?: string | number }) => React.ReactNode
  size?: string | number
  color?: string
}

const StatusCard = (props: IStatusProps) => {
  const { label, value, renderIcon, size = 28, color } = props

  const [brand600] = useToken('colors', ['brand.600'])

  const defaultIconProps = { size, color: color ?? brand600 }

  return (
    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <Box flex="1">
          <Stat.Root>
            <Stat.Label>{label}</Stat.Label>
            <Stat.ValueText>{value}</Stat.ValueText>
          </Stat.Root>
        </Box>
        {renderIcon ? (
          <Box ml={4} color="gray.500" display="flex" alignItems="center" justifyContent="center">
            {renderIcon(defaultIconProps)}
          </Box>
        ) : null}
      </Flex>
    </Box>
  )
}

export default StatusCard
