import { useFormContext } from 'react-hook-form'
import { Box, Fieldset, Flex, Input } from '@chakra-ui/react'
import { Field } from '~/components/ui/field'

import { Option } from '~/types/select'
import SelectForm from '~/components/Select/form/SelectForm'
import Leaves from '~/constant/leave'
import TeacherSelect from '../documents/component/TeacherSelect'
import { TLeaveFormInput } from './schema/leave'
import { format } from 'date-fns'

interface IDocumentForm {
  showTeachers: boolean
  startDate: Date | undefined
  endDate: Date | undefined
}

const options: Option[] = [
  { label: Leaves.force, value: 'force' },
  { label: Leaves.accrued, value: 'accrued' },
  { label: Leaves.regular, value: 'regular' }
]

const DocumentForm = (props: IDocumentForm) => {
  const { showTeachers, startDate, endDate } = props

  const {
    register,
    formState: { errors }
  } = useFormContext<TLeaveFormInput>()

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Flex width="100%" height="50px" gap={2}>
        <Box flex="1">
          <Box>From:</Box> {format(startDate ?? new Date(), 'MMMM d, yyyy')}
        </Box>
        <Box flex="1">
          <Box>To:</Box>
          {format(endDate ?? new Date(), 'MMMM d, yyyy')}
        </Box>
      </Flex>
      {showTeachers && (
        <Field label="Teacher" invalid={!!errors.teacherId} errorText={errors.teacherId?.message}>
          <Box width="100%">
            <TeacherSelect />
          </Box>
        </Field>
      )}
      <Field label="Leave type" invalid={!!errors.leaveType} errorText={errors.leaveType?.message}>
        <Box width="100%">
          <SelectForm options={options} name="leaveType" placeholder="Select a document type" />
        </Box>
      </Field>

      <Field label="Remarks" invalid={!!errors.remarks} errorText={errors.remarks?.message}>
        <Input {...register('remarks')} />
      </Field>
    </Fieldset.Root>
  )
}
export default DocumentForm
