import { FormErrorMessage, FormLabel, FormControl, Input } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'

import PositionSelect from './component/PositionSelect'
import { TTeacherFormInput } from './types/teachers'
import FileUpload from '~/components/FileUpload/FileUpload'
import ProfileAvatar from './[id]/ProfileAvatar'

const TeacherForm = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext<TTeacherFormInput>()

  return (
    <form>
      <ProfileAvatar />
      <FormControl id="firstName" isInvalid={!!errors.firstName} mb={4}>
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <Input {...register('firstName')} />
        <FormErrorMessage>
          {errors.firstName && <FormErrorMessage>First name is required.</FormErrorMessage>}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="lastName" isInvalid={!!errors.lastName} mb={4}>
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <Input {...register('lastName')} />
        <FormErrorMessage>
          {errors.lastName && <FormErrorMessage>Last name is required.</FormErrorMessage>}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="email" isInvalid={!!errors.email} mb={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register('email')} />
        <FormErrorMessage>{errors.email && <FormErrorMessage>Email is required.</FormErrorMessage>}</FormErrorMessage>
      </FormControl>
      <FormControl id="position" isInvalid={!!errors.position} mb={4}>
        <FormLabel htmlFor="position">Position</FormLabel>
        <PositionSelect />
        <FormErrorMessage>
          {errors.position && <FormErrorMessage>Position is required.</FormErrorMessage>}
        </FormErrorMessage>
      </FormControl>
    </form>
  )
}

export default TeacherForm
