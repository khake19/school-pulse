import { Box, Text, Divider, Heading } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import schema, { TTeacherFormInput } from '../schema/teachers'
import { zodResolver } from '@hookform/resolvers/zod'
import ProfileForm from './ProfileForm'
import { TTeacher } from '../types/teachers'

interface IProfileProps {
  teacher: TTeacher
}
const Profile = (props: IProfileProps) => {
  const methods = useForm<TTeacherFormInput>({
    resolver: zodResolver(schema)
  })

  return (
    <Box>
      <Box marginBottom={10}>
        <Heading as="h4" size="md" pt={5}>
          Profile
        </Heading>
        <Text pt={2} pb={5}>
          Update your personal info and photo here.
        </Text>
        <Divider />
      </Box>
      <FormProvider {...methods}>
        <ProfileForm />
      </FormProvider>
    </Box>
  )
}

export default Profile
