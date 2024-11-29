import { useFormContext, Controller } from 'react-hook-form'
import { FormErrorMessage, FormControl } from '@chakra-ui/react'

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
    <form>
      <FormControl id="file" mb={4} isInvalid={!!errors.file}>
        <Controller
          render={({ field: { onChange, value } }) => <FileUpload onFilesChange={onChange} value={value as any} />}
          name="file"
          control={control}
          defaultValue={[]}
        />
        <FormErrorMessage>
          {errors.file && <FormErrorMessage fontSize="sm">File is required.</FormErrorMessage>}
        </FormErrorMessage>
      </FormControl>
      {showTeachers && (
        <FormControl id="teacherId" mb={4} isInvalid={!!errors.teacherId}>
          <TeacherSelect />
          <FormErrorMessage>
            {errors.teacherId && <FormErrorMessage fontSize="sm">Teacher is required.</FormErrorMessage>}
          </FormErrorMessage>
        </FormControl>
      )}
      <FormControl id="documentType" mb={4} isInvalid={!!errors.documentType}>
        <SelectForm options={options} name="documentType" placeholder="Select a document type" />
        <FormErrorMessage>
          {errors.documentType && <FormErrorMessage fontSize="sm">Document type is required.</FormErrorMessage>}
        </FormErrorMessage>
      </FormControl>
    </form>
  )
}
export default DocumentForm
