import { useEffect } from 'react'
import { notFound, useParams } from 'next/navigation'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import useGetTeacher from '../../hooks/useGetTeacher'
import { HttpStatus } from '~/constant/http'

const useGetTeacherDetails = () => {
  const { id } = useParams()
  const school = useCurrentSchool((state) => state.school)
  const { teacher, isFetching, status } = useGetTeacher(school?.id, id as string)

  useEffect(() => {
    if (!isFetching && status === HttpStatus.error) {
      notFound()
    }
  }, [isFetching, status])

  return { teacher, isFetching }
}

export default useGetTeacherDetails
