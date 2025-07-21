import { Fieldset, Input, Box, SimpleGrid } from '@chakra-ui/react'

import PositionSelectForm from '../component/PositionSelectForm'
import { useFormContext } from 'react-hook-form'
import { TTeacherFormInput } from '../types/teachers'
import ProfileAvatar from './ProfileAvatar'
import SelectForm from '~/components/Select/form/SelectForm'
import { Field } from '~/components/ui/field'
import PatternFormatField from '~/components/NumberFormat/PatternFormatField'

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
            <Field label="First name" invalid={!!errors.firstName} errorText={errors.firstName?.message} mb={4}>
              <Input {...register('firstName')} />
            </Field>
            <Field label="Last name" invalid={!!errors.lastName} errorText={errors.lastName?.message} mb={4}>
              <Input {...register('lastName')} />
            </Field>
            <Field
              label="Employee Number"
              invalid={!!errors.employeeNumber}
              errorText={errors.employeeNumber?.message}
              mb={4}
            >
              <PatternFormatField name="employeeNumber" format="#######" />
            </Field>
            <Field label="Gender" invalid={!!errors.gender} errorText={errors.gender?.message} mb={4}>
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
            <Field label="Date Hired" invalid={!!errors.dateHired} errorText={errors.dateHired?.message} mb={4}>
              <Input {...register('dateHired')} type="date" />
            </Field>
            <Field
              label="Philhealth Number"
              invalid={!!errors.philhealth}
              errorText={errors.philhealth?.message}
              mb={4}
            >
              <PatternFormatField name="philhealth" format="##-#########-#" />
            </Field>
            <Field label="Pag Ibig" invalid={!!errors.pagibig} errorText={errors.pagibig?.message} mb={4}>
              <PatternFormatField name="pagibig" format="####-####-####" />
            </Field>
            <Field label="Plantilla" invalid={!!errors.plantilla} errorText={errors.plantilla?.message}>
              <Input {...register('plantilla')} />
            </Field>
          </Box>
          <Box flex="2">
            <Field label="Middle name" invalid={!!errors.middleName} errorText={errors.middleName?.message} mb={4}>
              <Input {...register('middleName')} />
            </Field>
            <Field label="Suffix" invalid={!!errors.suffix} errorText={errors.suffix?.message} mb={4}>
              <Input {...register('suffix')} />
            </Field>
            <Field label="Email address" invalid={!!errors.email} errorText={errors.email?.message} mb={4}>
              <Input {...register('email')} type="email" />
            </Field>
            <Field label="Position" invalid={!!errors.position} errorText={errors.position?.message} mb={4}>
              <Box width="100%">
                <PositionSelectForm />
              </Box>
            </Field>
            <Field
              label="Date of Promotion"
              invalid={!!errors.datePromotion}
              errorText={errors.datePromotion?.message}
              mb={4}
            >
              <Input {...register('datePromotion')} type="date" />
            </Field>
            <Field label="GSIS" invalid={!!errors.gsis} errorText={errors.gsis?.message} mb={4}>
              <PatternFormatField name="gsis" format="##########" />
            </Field>
            <Field label="Tax Identification Number" invalid={!!errors.tin} errorText={errors.tin?.message} mb={4}>
              <PatternFormatField name="tin" format="###-###-###-####" />
            </Field>
          </Box>
        </SimpleGrid>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export default ProfileForm
