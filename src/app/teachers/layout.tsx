import Layout from '~/components/Layout'

interface ITeacherLayoutProps {
  children: React.ReactNode
}

const TeacherLayout = ({ children }: ITeacherLayoutProps) => {
  return <Layout>{children}</Layout>
}

export default TeacherLayout
