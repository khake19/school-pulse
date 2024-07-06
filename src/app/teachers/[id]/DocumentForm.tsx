import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useFormContext, Controller } from 'react-hook-form'
import FileUpload from '~/components/FileUpload/FileUpload'

const DocumentForm = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <form>
      <Controller
        render={({ field: { onChange, value } }) => <FileUpload onFilesChange={onChange} value={value} />}
        name="file"
        control={control}
        defaultValue={[]}
      />
    </form>
  )
}
export default DocumentForm
