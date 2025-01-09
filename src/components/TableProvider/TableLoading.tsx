import { HStack, Stack } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '~/components/ui/skeleton'

const TableLoading = () => {
  return (
    <Stack gap="6" maxW="xs" marginTop={4}>
      <HStack width="full">
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={2} />
      </HStack>
      <Skeleton height="200px" />
    </Stack>
  )
}

export default TableLoading
