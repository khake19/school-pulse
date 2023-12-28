import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { TTeacherSchema } from './schema/teachers'
import PositionSelect from './component/PositionSelect'

const TeacherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useFormContext<TTeacherSchema>()

  const onSubmit = (data) => console.log('data', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="first_name" isInvalid={!!errors.first_name} mb={4}>
        <FormLabel htmlFor="first_name">First name</FormLabel>
        <Input {...register('first_name')} />
        <FormErrorMessage>
          {errors.first_name && <FormErrorMessage>First name is required.</FormErrorMessage>}
        </FormErrorMessage>
      </FormControl>
      <FormControl id="last_name" isInvalid={!!errors.last_name} mb={4}>
        <FormLabel htmlFor="last_name">Last name</FormLabel>
        <Input {...register('last_name')} />
        <FormErrorMessage>
          {errors.last_name && <FormErrorMessage>Last name is required.</FormErrorMessage>}
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
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default TeacherForm
