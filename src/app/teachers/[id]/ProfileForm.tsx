import { Fieldset, Input, Box, SimpleGrid } from '@chakra-ui/react'

import { Option } from '~/types/select'

import PositionSelect from '../component/PositionSelect'
import { useFormContext } from 'react-hook-form'
import { TTeacherFormInput } from '../types/teachers'
import ProfileAvatar from './ProfileAvatar'
import SelectForm from '~/components/Select/form/SelectForm'
import { Field } from '~/components/ui/field'

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
    <Fieldset.Root size="lg" maxW="md">
      <Fieldset.Content>
        <ProfileAvatar />
        <SimpleGrid columns={2} width={700} gap={2}>
          <Box flex="1">
            <Field label="First name" invalid={!!errors.firstName} errorText="First name is required.">
              <Input {...register('firstName')} />
            </Field>
            <Field label="Email address" invalid={!!errors.email} errorText="Email is required.">
              <Input {...register('email')} type="email" />
            </Field>
            <Field label="Employee Number">
              <Input {...register('employeeNumber')} />
            </Field>
            <Field label="Gender" invalid={!!errors.gender} errorText="Gender is required.">
              <Box width="100%">
                <SelectForm options={options} name="gender" placeholder="Select a gender" />
              </Box>
            </Field>
          </Box>
          <Box flex="2">
            <Field label="Last name" invalid={!!errors.lastName} errorText="Last name is required.">
              <Input {...register('lastName')} />
            </Field>
            <Field label="Position" invalid={!!errors.position} errorText="Position is required.">
              <Box width="100%">
                <PositionSelect />
              </Box>
            </Field>
            <Field label="Remarks" invalid={!!errors.remarks} errorText="Remarks is required.">
              <Input {...register('remarks')} />
            </Field>
          </Box>
        </SimpleGrid>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export default ProfileForm
