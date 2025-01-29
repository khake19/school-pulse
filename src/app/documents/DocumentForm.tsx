import { useFormContext, Controller } from 'react-hook-form'
import { Box, Fieldset, Input, Stack } from '@chakra-ui/react'
import { Field } from '~/components/ui/field'

import { Option } from '~/types/select'

import FileUpload from '~/components/FileUpload/FileUpload'
import { TDocumentFormInput } from './schema/documents'
import TeacherSelect from './component/TeacherSelect'
import SelectForm from '~/components/Select/form/SelectForm'

interface IDocumentForm {
  showTeachers: boolean
}

const options: Option[] = [{ label: 'DTR', value: 1 }]

const DocumentForm = (props: IDocumentForm) => {
  const { showTeachers } = props

  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<TDocumentFormInput>()

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.HelperText>Please provide a document details below.</Fieldset.HelperText>
      </Stack>
      <Fieldset.Content>
        <Field invalid={!!errors.file} errorText={errors.file?.message}>
          <Box width="100%">
            <Controller
              render={({ field: { onChange, value } }) => <FileUpload onFilesChange={onChange} value={value} />}
              name="file"
              control={control}
              defaultValue={[]}
            />
          </Box>
        </Field>
        {showTeachers && (
          <Field label="Teacher" invalid={!!errors.teacherId} errorText={errors.teacherId?.message}>
            <Box width="100%">
              <TeacherSelect />
            </Box>
          </Field>
        )}
        <Field label="Document type" invalid={!!errors.file} errorText={errors.file?.message}>
          <Box width="100%">
            <SelectForm options={options} name="documentType" placeholder="Select a document type" />
          </Box>
        </Field>

        <Field label="Date Period" invalid={!!errors.datePeriod} errorText={errors.datePeriod?.message}>
          <Input {...register('datePeriod')} type="month" />
        </Field>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}
export default DocumentForm
