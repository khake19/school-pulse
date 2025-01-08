import { useFormContext, Controller } from 'react-hook-form'
import { Box, Fieldset, NativeSelectRoot, Stack } from '@chakra-ui/react'
import { Field } from '~/components/ui/field'

import { Option } from '~/types/select'

import FileUpload from '~/components/FileUpload/FileUpload'
import { TDocumentFormInput } from './schema/documents'
import TeacherSelect from './component/TeacherSelect'
import SelectForm from '~/components/Select/form/SelectForm'

interface IDocumentForm {
  showTeachers: boolean
}

const options: Option[] = [
  { label: 'TIN', value: 1 },
  { label: 'BIR', value: 2 },
  { label: 'Passport', value: 3 },
  { label: 'SSS', value: 4 }
]

const DocumentForm = (props: IDocumentForm) => {
  const { showTeachers } = props

  const {
    control,
    formState: { errors }
  } = useFormContext<TDocumentFormInput>()

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.HelperText>Please provide a document details below.</Fieldset.HelperText>
      </Stack>
      <Fieldset.Content>
        <Field invalid={!!errors.file} errorText="File is required.">
          <Box width="100%">
            <Controller
              render={({ field: { onChange, value } }) => <FileUpload onFilesChange={onChange} value={value as any} />}
              name="file"
              control={control}
              defaultValue={[]}
            />
          </Box>
        </Field>
        {showTeachers && (
          <Field label="Teacher" invalid={!!errors.teacherId} errorText="Teacher is required.">
            <Box width="100%">
              <TeacherSelect />
            </Box>
          </Field>
        )}
        <Field label="Document type" invalid={!!errors.file} errorText="Document type is required.">
          <Box width="100%">
            <SelectForm options={options} name="documentType" placeholder="Select a document type" />
          </Box>
        </Field>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}
export default DocumentForm
