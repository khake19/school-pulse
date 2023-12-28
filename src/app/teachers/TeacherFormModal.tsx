import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import BasicModal from '~/components/Modal'

import schema, { TTeacherSchema } from './schema/teachers'
import TeacherForm from './TeacherForm'

interface ITeacherFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const TeacherFormModal = (props: ITeacherFormModalProps) => {
  const { isOpen, onClose } = props

  const methods = useForm<TTeacherSchema>({
    resolver: zodResolver(schema)
  })

  return (
    <BasicModal title="Create Teacher" actions={undefined} isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <TeacherForm />
      </FormProvider>
    </BasicModal>
  )
}

export default TeacherFormModal
