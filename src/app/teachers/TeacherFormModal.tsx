import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import BasicModal from '~/components/Modal'

import useCreateTeacher from './hooks/useCreateTeacher'
import useUpdateTeacher from './hooks/useUpdateTeacher'
import useAlert from '~/hooks/useAlert'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

import schema, { TTeacherFormInput } from './schema/teachers'
import TeacherForm from './TeacherForm'
import TeachersMessage from './constant/teachers'
import useGetTeacher from './hooks/useGetTeacher'
import { HttpStatus } from '~/constant/http'

interface ITeacherFormModalProps {
  isOpen: boolean
  onClose: () => void
  teacherId: string
}

const TeacherFormModal = (props: ITeacherFormModalProps) => {
  const { isOpen, onClose, teacherId } = props

  const school = useCurrentSchool((state) => state.school)
  const { status, teacher } = useGetTeacher(school.id, teacherId)

  const methods = useForm<TTeacherFormInput>({
    resolver: zodResolver(schema)
  })

  const alert = useAlert()
  const queryClient = useQueryClient()

  const { handleSubmit, reset } = methods

  const { createTeacher } = useCreateTeacher({
    onSuccess: async () => {
      alert.success(TeachersMessage.created)
      queryClient.invalidateQueries(['users'])
      reset()
      onClose()
    }
  })

  const { updateTeacher } = useUpdateTeacher({
    onSuccess: async () => {
      alert.success(TeachersMessage.updated)
      queryClient.invalidateQueries(['users'])
      reset()
      onClose()
    }
  })

  useEffect(() => {
    if (status === HttpStatus.success) {
      reset({
        first_name: teacher?.first_name,
        last_name: teacher?.last_name,
        email: teacher?.email,
        position: teacher?.position?.id
      })
    }
  }, [status, teacher])

  const handleCreateTeacher = () => {
    handleSubmit((data) => createTeacher(school.id, data))()
  }

  const handleUpdateTeacher = () => {
    handleSubmit((data) => updateTeacher(school.id, teacherId, data))()
  }

  const createActions = (
    <Button onClick={handleCreateTeacher} mt={4} colorScheme="teal" type="submit">
      Submit
    </Button>
  )

  const updateActions = (
    <Button onClick={handleUpdateTeacher} mt={4} colorScheme="teal" type="submit">
      Update
    </Button>
  )

  return (
    <BasicModal
      title={`${teacherId ? 'Update' : 'Create'} Teacher`}
      actions={teacherId ? updateActions : createActions}
      isOpen={isOpen}
      onClose={onClose}
    >
      <FormProvider {...methods}>
        <TeacherForm />
      </FormProvider>
    </BasicModal>
  )
}

export default TeacherFormModal
