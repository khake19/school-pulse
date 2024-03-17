import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'
import { useFormContext, SubmitHandler } from 'react-hook-form'

import { TTeacherFormInput } from './schema/teachers'
import PositionSelect from './component/PositionSelect'
import useCreateTeacher from './hooks/useCreateTeacher'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useAlert from '~/hooks/useAlert'
import TeachersMessage from './constant/teachers'

const TeacherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useFormContext<TTeacherFormInput>()

  const school = useCurrentSchool((state) => state.school)
  const alert = useAlert()

  const { createTeacher } = useCreateTeacher({
    onSuccess: async () => {
      alert.success(TeachersMessage.success)
    }
  })

  const onSubmit: SubmitHandler<TTeacherFormInput> = (data) => {
    createTeacher(school.id, data)
  }

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
