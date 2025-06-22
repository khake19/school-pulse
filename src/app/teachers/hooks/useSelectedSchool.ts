import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { ISchool } from '~/app/schools/types/schools'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

const useSelectedSchool = (schools: ISchool[]) => {
  const [school, setSchool] = useCurrentSchool(useShallow((state) => [state.school, state.setSchool]))
  const [selectedSchool, setSelectedSchool] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!school?.id && schools.length > 0 && school !== schools[0]) {
      setSchool(schools[0])
      setSelectedSchool(schools[0]?.name)
    } else if (school && school.name !== selectedSchool) {
      setSelectedSchool(school.name)
    }
  }, [school, schools, selectedSchool, setSchool])

  const handleSelectedSchool = (selectedSchool: ISchool) => {
    setSchool(selectedSchool)
    setSelectedSchool(selectedSchool.name)
    router.push('/')
  }

  return { handleSelectedSchool, selectedSchool }
}

export default useSelectedSchool
