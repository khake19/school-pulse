import { Suspense } from 'react'
import Layout from '~/components/Layout'
import TeacherList from './TeacherList'

const Teachers = () => {
  return (
    <Layout>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}>
        <TeacherList />
      </Suspense>
    </Layout>
  )
}

export default Teachers
