import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Box,
  SimpleGrid,
  Text,
  Avatar,
  Heading,
  Flex
} from '@chakra-ui/react'

import Select from '~/components/Select'
import { Option } from '~/types/select'

import PositionSelect from '../component/PositionSelect'
import { useFormContext } from 'react-hook-form'
import { TTeacherFormInput } from '../types/teachers'
import { useRef, useState } from 'react'

const options: Option[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

const ProfileForm = () => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<TTeacherFormInput>()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedImage, setSelectedImage] = useState()
  const { ref, ...rest } = register('avatar')

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
      setValue('avatar', e.target.files[0])
    }
  }

  const handleClick = () => {
    fileInputRef?.current?.click()
  }

  return (
    <form>
      <FormControl id="avatar" isInvalid={!!errors.avatar} mb={4}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" marginBottom={5}>
          <Avatar
            size="xl"
            name="Segun Adebayo"
            src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://bit.ly/sage-adebayo'}
            onClick={handleClick}
          />
          <Box>
            <Heading size="sm">Profile Picture</Heading>
            <Text fontSize="xs" mb={2}>
              PNG, JPG to 5mb
            </Text>
            <Text fontSize="xs" onClick={handleClick} color="teal">
              Update
            </Text>
            <Input
              {...rest}
              type="file"
              name="avatar"
              ref={(e) => {
                ref(e)
                fileInputRef.current = e // you can still assign to ref
              }}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </Box>
        </Flex>
      </FormControl>
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
            <Input {...register('employeeNumber')} />
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
            <Input {...register('remarks')} />
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
