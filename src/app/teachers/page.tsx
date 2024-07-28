import TeacherList from './TeacherList'

interface IParamsProps {
  searchParams?: {
    query?: string
    page?: string
  }
}

const Teachers = () => {
  return <TeacherList />
}

export default Teachers
