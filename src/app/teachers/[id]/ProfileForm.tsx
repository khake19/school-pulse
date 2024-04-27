import { FormErrorMessage, FormLabel, FormControl, Input, Box, SimpleGrid, Text } from '@chakra-ui/react'

import Select from '~/components/Select'
import { Option } from '~/types/select'

import PositionSelect from '../component/PositionSelect'

const options: Option[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

const ProfileForm = () => {
  return (
    <form>
      <SimpleGrid columns={2} spacing={5} width={700}>
        <Box flex="1">
          <FormControl id="first_name" mb={4}>
            <FormLabel htmlFor="first_name">
              <Text fontSize="sm">First name</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl id="email" mb={4}>
            <FormLabel htmlFor="email">
              <Text fontSize="sm">Email</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
          <FormControl id="employee_number" mb={4}>
            <FormLabel htmlFor="employee_number">
              <Text fontSize="sm">Employee Number</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>
              <FormErrorMessage>Last name is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
          <FormControl id="gender" mb={4}>
            <FormLabel htmlFor="gender">
              <Text fontSize="sm">Gender</Text>
            </FormLabel>
            <Select options={options} name="gender" placeholder="Select a gender" />
            <FormErrorMessage>
              <FormErrorMessage>Gender is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Box flex="2">
          <FormControl id="last_name" mb={4}>
            <FormLabel htmlFor="last_name">
              <Text fontSize="sm">Last Name</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>
              <FormErrorMessage>Last name is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
          <FormControl id="position" mb={4}>
            <FormLabel htmlFor="position">
              <Text fontSize="sm">Position</Text>
            </FormLabel>
            <PositionSelect />
          </FormControl>
          <FormControl id="remarks" mb={4}>
            <FormLabel htmlFor="remarks">
              <Text fontSize="sm">Remarks</Text>
            </FormLabel>
            <Input />
            <FormErrorMessage>
              <FormErrorMessage>Remarks is required.</FormErrorMessage>
            </FormErrorMessage>
          </FormControl>
        </Box>
      </SimpleGrid>
    </form>
  )
}

export default ProfileForm
