import { useFormContext } from 'react-hook-form'
import { Box, Fieldset, Flex, Input } from '@chakra-ui/react'
import { Field } from '~/components/ui/field'

import { Option } from '~/types/select'
import SelectForm from '~/components/Select/form/SelectForm'
import Leaves from '~/constant/leave'
import TeacherSelectForm from '../documents/component/TeacherSelectForm'
import { TLeaveFormInput } from './schema/leave'

interface ILeaveForm {
  showTeachers: boolean
}

const options: Option[] = [
  { label: Leaves.force, value: 'force' },
  { label: Leaves.accrued, value: 'accrued' },
  { label: Leaves.regular, value: 'regular' }
]

const LeaveForm = (props: ILeaveForm) => {
  const { showTeachers } = props

  const {
    register,
    formState: { errors }
  } = useFormContext<TLeaveFormInput>()

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Flex width="100%" height="50px" gap={2}>
        <Box flex="1">
          <Field label="From" invalid={!!errors.startAt} errorText={errors.startAt?.message}>
            <Input {...register('startAt')} type="date" />
          </Field>
        </Box>
        <Box flex="1">
          <Field label="To" invalid={!!errors.endAt} errorText={errors.endAt?.message}>
            <Input {...register('endAt')} type="date" />
          </Field>
        </Box>
      </Flex>
      {showTeachers && (
        <Field label="Teacher" invalid={!!errors.teacherId} errorText={errors.teacherId?.message}>
          <Box width="100%">
            <TeacherSelectForm />
          </Box>
        </Field>
      )}
      <Field label="Leave type" invalid={!!errors.type} errorText={errors.type?.message}>
        <Box width="100%">
          <SelectForm options={options} name="type" placeholder="Select a document type" />
        </Box>
      </Field>

      <Field label="Remarks" invalid={!!errors.remarks} errorText={errors.remarks?.message}>
        <Input {...register('remarks')} />
      </Field>
    </Fieldset.Root>
  )
}
export default LeaveForm
