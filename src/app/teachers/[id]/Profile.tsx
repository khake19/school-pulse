import { Box, Text, Heading, Button } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import schema from '../schema/teachers'
import { zodResolver } from '@hookform/resolvers/zod'
import ProfileForm from './ProfileForm'
import { TTeacherData, TTeacherFormInput } from '../types/teachers'
import useUpdateTeacher from '../hooks/useUpdateTeacher'
import TeachersMessage from '../constant/teachers'
import useAlert from '~/hooks/useAlert'
import { useQueryClient } from '@tanstack/react-query'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import { header } from '../Teacher.style'

interface IProfileProps {
  teacher: TTeacherData
}
const Profile = (props: IProfileProps) => {
  const { teacher } = props
  const school = useCurrentSchool((state) => state.school)

  const values: TTeacherFormInput = {
    firstName: teacher.firstName,
    middleName: teacher.middleName,
    lastName: teacher.lastName,
    suffix: teacher?.suffix,
    position: teacher.position.id,
    email: teacher.email,
    gender: teacher.gender,
    employeeNumber: teacher.employeeNumber,
    avatar: teacher.avatar,
    gsis: teacher.gsis,
    philhealth: teacher.philhealth,
    pagibig: teacher.pagibig,
    tin: teacher.tin,
    plantilla: teacher.plantilla,
    dateHired: teacher.dateHired,
    datePromotion: teacher.datePromotion
  }

  const methods = useForm<TTeacherFormInput>({
    values,
    resolver: zodResolver(schema)
  })

  const alert = useAlert()
  const queryClient = useQueryClient()

  const { handleSubmit, reset } = methods

  const { updateTeacher } = useUpdateTeacher({
    onSuccess: async () => {
      alert.success(TeachersMessage.updated)
      queryClient.invalidateQueries(['users'])
      reset()
    }
  })

  const handleUpdateTeacher = () => {
    handleSubmit((data) => updateTeacher(school.id, teacher.id, data))()
  }

  return (
    <Box css={header}>
      <Box marginBottom={10}>
        <Heading as="h4" size="md" pt={5}>
          Profile
        </Heading>
        <Text pt={2} pb={5}>
          Update your personal info and photo here.
        </Text>
      </Box>
      <FormProvider {...methods}>
        <ProfileForm />
        <Button onClick={handleUpdateTeacher} mt={4} colorPalette="teal" type="submit">
          <Text>Update</Text>
        </Button>
      </FormProvider>
    </Box>
  )
}

export default Profile
