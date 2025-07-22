import { Box, Fieldset, Input, Stack } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import PositionSelectForm from './component/PositionSelectForm'
import { TTeacherFormInput } from './types/teachers'
import ProfileAvatar from './[id]/ProfileAvatar'
import { Field } from '~/components/ui/field'
import PatternFormatField from '~/components/NumberFormat/PatternFormatField'
import SelectForm from '~/components/Select/form/SelectForm'

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
        <Field label="First name" invalid={!!errors.firstName} errorText={errors.firstName?.message}>
          <Input {...register('firstName')} />
        </Field>
        <Field label="Middle name" invalid={!!errors.middleName} errorText={errors.middleName?.message}>
          <Input {...register('middleName')} />
        </Field>
        <Field label="Last name" invalid={!!errors.lastName} errorText={errors.lastName?.message}>
          <Input {...register('lastName')} />
        </Field>
        <Field label="Suffix" invalid={!!errors.suffix} errorText={errors.suffix?.message}>
          <Input {...register('suffix')} />
        </Field>
        <Field label="Email address" invalid={!!errors.email} errorText={errors.email?.message}>
          <Input {...register('email')} type="email" />
        </Field>
        <Field label="Position" invalid={!!errors.position} errorText={errors.position?.message}>
          <Box width="100%">
            <PositionSelectForm />
          </Box>
        </Field>
        <Field label="Gender" invalid={!!errors.gender} errorText={errors.gender?.message}>
          <Box width="100%">
            <SelectForm
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' }
              ]}
              name="gender"
              placeholder="Select a gender"
            />
          </Box>
        </Field>
        <Field label="Date Hired" invalid={!!errors.dateHired} errorText={errors.dateHired?.message}>
          <Input {...register('dateHired')} type="date" />
        </Field>
        <Field label="Date of Promotion" invalid={!!errors.datePromotion} errorText={errors.datePromotion?.message}>
          <Input {...register('datePromotion')} type="date" />
        </Field>
        <Field label="Employee Number" invalid={!!errors.employeeNumber} errorText={errors.employeeNumber?.message}>
          <PatternFormatField name="employeeNumber" format="#######" />
        </Field>
        <Field label="Philhealth Number" invalid={!!errors.philhealth} errorText={errors.philhealth?.message}>
          <PatternFormatField name="philhealth" format="##-#########-#" />
        </Field>
        <Field label="GSIS" invalid={!!errors.gsis} errorText={errors.gsis?.message}>
          <PatternFormatField name="gsis" format="##########" />
        </Field>
        <Field label="Pag Ibig" invalid={!!errors.pagibig} errorText={errors.pagibig?.message}>
          <PatternFormatField name="pagibig" format="####-####-####" />
        </Field>
        <Field label="Tax Identification Number" invalid={!!errors.tin} errorText={errors.tin?.message}>
          <PatternFormatField name="tin" format="###-###-###-####" />
        </Field>
        <Field label="Plantilla" invalid={!!errors.plantilla} errorText={errors.plantilla?.message}>
          <Input {...register('plantilla')} />
        </Field>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export default TeacherForm
