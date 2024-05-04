import { FormErrorMessage, FormLabel, FormControl, Input, Box, SimpleGrid, Text } from '@chakra-ui/react'

import Select from '~/components/Select'
import { Option } from '~/types/select'

import PositionSelect from '../component/PositionSelect'
import { useFormContext } from 'react-hook-form'
import { TTeacherFormInput } from '../types/teachers'

const options: Option[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

const ProfileForm = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<TTeacherFormInput>()

  return (
    <form>
      <SimpleGrid columns={2} spacing={5} width={700}>
        <Box flex="1">
          <FormControl id="firstName" isInvalid={!!errors.firstName} mb={4}>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input {...register('firstName')} />
            <FormErrorMessage>
              {errors.firstName && <FormErrorMessage>First name is required.</FormErrorMessage>}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="email" isInvalid={!!errors.email} mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input {...register('email')} />
            <FormErrorMessage>
              {errors.email && <FormErrorMessage>Email is required.</FormErrorMessage>}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="employeeNumber" mb={4}>
            <FormLabel htmlFor="employeeNumber">
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
          <FormControl id="lastName" isInvalid={!!errors.lastName} mb={4}>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input {...register('lastName')} />
            <FormErrorMessage>
              {errors.firstName && <FormErrorMessage>Last name is required.</FormErrorMessage>}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="position" mb={4}>
            <FormLabel htmlFor="position">
              <Text fontSize="sm">Position</Text>
            </FormLabel>
            <PositionSelect />
            <FormErrorMessage>
              {errors.position && <FormErrorMessage>Position is required.</FormErrorMessage>}
            </FormErrorMessage>
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
