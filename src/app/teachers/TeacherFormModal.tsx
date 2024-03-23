import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'

import BasicModal from '~/components/Modal'

import useCreateTeacher from './hooks/useCreateTeacher'
import useAlert from '~/hooks/useAlert'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import schema, { TTeacherFormInput } from './schema/teachers'
import TeacherForm from './TeacherForm'
import TeachersMessage from './constant/teachers'

interface ITeacherFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const TeacherFormModal = (props: ITeacherFormModalProps) => {
  const { isOpen, onClose } = props

  const methods = useForm<TTeacherFormInput>({
    resolver: zodResolver(schema)
  })
  const school = useCurrentSchool((state) => state.school)
  const alert = useAlert()
  const queryClient = useQueryClient()

  const { handleSubmit, reset } = methods

  const { createTeacher } = useCreateTeacher({
    onSuccess: async () => {
      alert.success(TeachersMessage.success)
      queryClient.invalidateQueries(['users'])
      reset()
      onClose()
    }
  })

  const handleCreateTeacher = () => {
    handleSubmit((data) => createTeacher(school.id, data))()
  }

  const actions = (
    <Button onClick={handleCreateTeacher} mt={4} colorScheme="teal" type="submit">
      Submit
    </Button>
  )

  return (
    <BasicModal title="Create Teacher" actions={actions} isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <TeacherForm />
      </FormProvider>
    </BasicModal>
  )
}

export default TeacherFormModal
