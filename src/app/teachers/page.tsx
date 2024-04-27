import Layout from '~/components/Layout'
import TeacherList from './TeacherList'

interface IParamsProps {
  searchParams?: {
    query?: string
    page?: string
  }
}

const Teachers = ({ searchParams }: IParamsProps) => {
  return <TeacherList />
}

export default Teachers
