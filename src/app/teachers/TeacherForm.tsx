import { Box, Fieldset, Input, Stack } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import PositionSelect from './component/PositionSelect'
import { TTeacherFormInput } from './types/teachers'
import ProfileAvatar from './[id]/ProfileAvatar'
import { Field } from '~/components/ui/field'

const TeacherForm = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<TTeacherFormInput>()

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.HelperText>Please provide a teacher details below.</Fieldset.HelperText>
      </Stack>
      <Fieldset.Content>
        <ProfileAvatar />
        <Field label="First name" invalid={!!errors.firstName} errorText="First name is required.">
          <Input {...register('firstName')} />
        </Field>
        <Field label="Last name" invalid={!!errors.lastName} errorText="Last name is required.">
          <Input {...register('lastName')} />
        </Field>
        <Field label="Email address" invalid={!!errors.email} errorText="Email is required.">
          <Input {...register('email')} type="email" />
        </Field>
        <Field label="Position" invalid={!!errors.position} errorText="Position is required.">
          <Box width="100%">
            <PositionSelect />
          </Box>
        </Field>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export default TeacherForm
